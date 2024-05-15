// src/Globe.tsx
import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, useTexture } from "@react-three/drei";
import * as d3 from "d3-geo";
import PinForm from "./pinForm";
import THREE from "three";
import { createClient } from "@/utils/supabase/client";

interface Pin {
  id: number;
  name: string;
  message: string;
  latitude: number;
  longitude: number;
}

const Globe: React.FC = () => {
  const globeRef = useRef<THREE.Mesh>(null);
  const texture = useTexture("/earth-texture.jpg");
  const [pins, setPins] = useState<Pin[]>([]);
  const [selectedCoords, setSelectedCoords] = useState<{
    lat: number;
    lon: number;
  } | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const fetchPins = async () => {
      const { data } = await supabase.from("pins").select("*");
      if (data) setPins(data);
    };
    fetchPins();
  }, []);

  const handlePointerDown = (e: any) => {
    e.stopPropagation();
    const [x, y, z] = e.point?.toArray() ?? [0, 0, 0];
    const projection = d3.geoOrthographic().translate([0, 0]).scale(1);
    const coords = projection.invert?.([x, y]) ?? null;
    if (coords) {
      const [longitude, latitude] = coords;
      setSelectedCoords({ lat: latitude, lon: longitude });
    }
  };

  const addPin = async ({
    name,
    message,
  }: {
    name: string;
    message: string;
  }) => {
    if (selectedCoords) {
      const { lat, lon } = selectedCoords;
      const { data, error } = await supabase
        .from("pins")
        .insert([{ name, message, latitude: lat, longitude: lon }]);
      if (data) setPins([...pins, ...data]);
      setSelectedCoords(null);
    }
  };

  const get3DPosition = (
    longitude: number,
    latitude: number
  ): [number, number, number] => {
    const [x, y] = d3.geoOrthographic().translate([0, 0]).scale(1)([
      longitude,
      latitude,
    ]) ?? [0, 0];
    return [x, y, 0]; // Add z-component
  };

  return (
    <>
      <Canvas onPointerDown={handlePointerDown}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 5]} />
        <Sphere ref={globeRef} args={[1, 64, 64]}>
          <meshStandardMaterial attach="material" map={texture} />
        </Sphere>
        {pins.map((pin) => (
          <mesh
            key={pin.id}
            position={get3DPosition(pin.longitude, pin.latitude)}
          >
            <sphereBufferGeometry args={[0.02, 32, 32]} />
            <meshStandardMaterial color="red" />
          </mesh>
        ))}
      </Canvas>
      {selectedCoords && <PinForm onSubmit={addPin} />}
    </>
  );
};

export default Globe;
