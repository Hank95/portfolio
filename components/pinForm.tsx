// src/PinForm.tsx
import React, { useState, FormEvent } from "react";

interface PinFormProps {
  onSubmit: (pinData: { name: string; message: string }) => void;
}

const PinForm: React.FC<PinFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({ name, message });
    setName("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Message:
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">Add Pin</button>
    </form>
  );
};

export default PinForm;
