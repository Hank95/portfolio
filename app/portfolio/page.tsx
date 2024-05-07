"use client";
import Link from "next/link";
import Image from "next/image";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { JSX, SVGProps, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import headShot from "@/public/head_shot.png";

export default function Component() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-[#4d6e5e] text-white">
        <Link className="flex items-center justify-center" href="#">
          <BriefcaseIcon className="h-6 w-6" />
          <span className="sr-only">John Doe's Portfolio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Experience
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Skills
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Education
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section
          className="w-full py-12 md:py-24 lg:py-32 opacity-0 translate-y-10 transition-all duration-700"
          data-aos="fade-up"
          id="about"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl text-[#4d6e5e]">
                  John Doe
                </h1>
                <h2 className="text-2xl font-semibold text-gray-500 dark:text-gray-400">
                  Full-Stack Web Developer
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  I'm a passionate web developer with over 5 years of experience
                  building modern, responsive, and scalable web applications.
                  Proficient in both front-end and back-end technologies, I
                  specialize in creating intuitive user experiences and
                  implementing robust, efficient solutions.
                </p>
              </div>
              <Image
                alt="John Doe"
                className="mx-auto aspect-square overflow-hidden rounded-full object-cover sm:w-full opacity-0 translate-x-10 transition-all duration-700"
                data-aos="fade-left"
                height="550"
                src={headShot}
                width="550"
              />
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 opacity-0 translate-y-10 transition-all duration-700"
          data-aos="fade-up"
          id="experience"
        >
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#4d6e5e]">
                Work Experience
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Take a look at my professional journey and the projects I've
                worked on.
              </p>
            </div>
            <div className="mt-8 grid gap-6">
              <Card
                className="border-[#4d6e5e] shadow-lg opacity-0 translate-x-10 transition-all duration-700"
                data-aos="fade-right"
              >
                <CardHeader>
                  <CardTitle className="text-[#4d6e5e]">
                    Senior Web Developer
                  </CardTitle>
                  <CardDescription>Acme Inc. | 2020 - Present</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    As a Senior Web Developer at Acme Inc., I've been
                    responsible for leading the development of several
                    high-profile web applications. I've worked closely with
                    cross-functional teams to design and implement scalable,
                    maintainable, and user-friendly solutions.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-500 dark:text-gray-400">
                    <li>
                      <span className="font-medium text-gray-900 dark:text-gray-100">
                        Key Achievements:
                      </span>
                      Spearheaded the migration of the company's legacy web
                      application to a modern, cloud-based architecture,
                      resulting in a 30% improvement in performance and a 50%
                      reduction in maintenance costs.
                    </li>
                    <li>
                      <span className="font-medium text-gray-900 dark:text-gray-100">
                        Technologies Used:
                      </span>
                      React, Next.js, Node.js, Express, MongoDB, AWS
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card
                className="border-[#4d6e5e] shadow-lg opacity-0 -translate-x-10 transition-all duration-700"
                data-aos="fade-left"
              >
                <CardHeader>
                  <CardTitle className="text-[#4d6e5e]">
                    Web Developer
                  </CardTitle>
                  <CardDescription>Acme Corp. | 2017 - 2020</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    As a Web Developer at Acme Corp., I was responsible for
                    building and maintaining a variety of web applications for
                    the company's clients. I worked closely with designers and
                    project managers to deliver high-quality, responsive, and
                    user-friendly solutions.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-500 dark:text-gray-400">
                    <li>
                      <span className="font-medium text-gray-900 dark:text-gray-100">
                        Key Achievements:
                      </span>
                      Developed a custom content management system that enabled
                      the client to easily update and manage their website,
                      resulting in a 50% reduction in maintenance costs.
                    </li>
                    <li>
                      <span className="font-medium text-gray-900 dark:text-gray-100">
                        Technologies Used:
                      </span>
                      HTML, CSS, JavaScript, WordPress, PHP, MySQL
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 opacity-0 translate-y-10 transition-all duration-700"
          data-aos="fade-up"
          id="skills"
        >
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#4d6e5e]">
                Skills
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Explore the technologies and tools I'm proficient in.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
              <div
                className="flex flex-col items-center space-y-2 opacity-0 translate-x-10 transition-all duration-700"
                data-aos="fade-right"
              >
                <ComponentIcon className="h-12 w-12 text-[#4d6e5e]" />
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-[#4d6e5e]">
                    React
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Front-end Library
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col items-center space-y-2 opacity-0 translate-x-10 transition-all duration-700"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <NetworkIcon className="h-12 w-12 text-[#4d6e5e]" />
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-[#4d6e5e]">
                    Node.js
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Runtime Environment
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col items-center space-y-2 opacity-0 translate-x-10 transition-all duration-700"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <DatabaseIcon className="h-12 w-12 text-[#4d6e5e]" />
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-[#4d6e5e]">
                    PostgreSQL
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    SQL Database
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col items-center space-y-2 opacity-0 translate-x-10 transition-all duration-700"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <CloudIcon className="h-12 w-12 text-[#4d6e5e]" />
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-[#4d6e5e]">AWS</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Cloud Platform
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col items-center space-y-2 opacity-0 -translate-x-10 transition-all duration-700"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <WindIcon className="h-12 w-12 text-[#4d6e5e]" />
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-[#4d6e5e]">
                    Tailwind CSS
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    CSS Framework
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col items-center space-y-2 opacity-0 -translate-x-10 transition-all duration-700"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <GitGraphIcon className="h-12 w-12 text-[#4d6e5e]" />
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-[#4d6e5e]">Git</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Version Control
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col items-center space-y-2 opacity-0 -translate-x-10 transition-all duration-700"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <TypeIcon className="h-12 w-12 text-[#4d6e5e]" />
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-[#4d6e5e]">
                    TypeScript
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Superset of JavaScript
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col items-center space-y-2 opacity-0 -translate-x-10 transition-all duration-700"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                <ArrowRightIcon className="h-12 w-12 text-[#4d6e5e]" />
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-[#4d6e5e]">
                    Next.js
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    React Framework
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 opacity-0 translate-y-10 transition-all duration-700"
          data-aos="fade-up"
          id="education"
        >
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#4d6e5e]">
                Education
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Check out my academic and professional certifications.
              </p>
            </div>
            <div className="mt-8 grid gap-6">
              <Card
                className="border-[#4d6e5e] shadow-lg opacity-0 translate-x-10 transition-all duration-700"
                data-aos="fade-right"
              >
                <CardHeader>
                  <CardTitle className="text-[#4d6e5e]">
                    Bachelor of Science in Computer Science
                  </CardTitle>
                  <CardDescription>
                    University of California, Berkeley | 2013 - 2017
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    During my time at UC Berkeley, I gained a strong foundation
                    in computer science, including algorithms, data structures,
                    and software engineering principles. I also had the
                    opportunity to work on several projects and internships that
                    allowed me to apply my knowledge in real-world scenarios.
                  </p>
                </CardContent>
              </Card>
              <Card
                className="border-[#4d6e5e] shadow-lg opacity-0 -translate-x-10 transition-all duration-700"
                data-aos="fade-left"
              >
                <CardHeader>
                  <CardTitle className="text-[#4d6e5e]">
                    AWS Certified Solutions Architect - Associate
                  </CardTitle>
                  <CardDescription>Certified in 2021</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function ArrowRightIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function BriefcaseIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function CloudIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}

function ComponentIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
      <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
      <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
      <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
    </svg>
  );
}

function DatabaseIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

function GitGraphIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="5" cy="6" r="3" />
      <path d="M5 9v6" />
      <circle cx="5" cy="18" r="3" />
      <path d="M12 3v18" />
      <circle cx="19" cy="6" r="3" />
      <path d="M16 15.7A9 9 0 0 0 19 9" />
    </svg>
  );
}

function NetworkIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </svg>
  );
}

function TypeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="4 7 4 4 20 4 20 7" />
      <line x1="9" x2="15" y1="20" y2="20" />
      <line x1="12" x2="12" y1="4" y2="20" />
    </svg>
  );
}

function WindIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  );
}
