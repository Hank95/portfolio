/**
 * v0 by Vercel.
 * @see https://v0.dev/t/p4f6nvU5ZsX
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { JSX, SVGProps } from "react";

export default function Portfolio() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-blue-900 text-white">
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
        <section className="w-full py-12 md:py-24 lg:py-32" id="about">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl text-blue-900">
                  Henry Pendleton
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
              <img
                alt="John Doe"
                className="mx-auto aspect-square overflow-hidden rounded-full object-cover sm:w-full"
                height="550"
                src="/placeholder.svg"
                width="550"
              />
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
          id="experience"
        >
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
                Work Experience
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Take a look at my professional journey and the projects I've
                worked on.
              </p>
            </div>
            <div className="mt-8 grid gap-6">
              <Card className="border-blue-900 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-900">
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
              <Card className="border-blue-900 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-900">Web Developer</CardTitle>
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
        <section className="w-full py-12 md:py-24 lg:py-32" id="skills">
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
                Skills
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Explore the technologies and tools I'm proficient in.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-2">
                <ComponentIcon className="h-12 w-12 text-blue-500" />
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-blue-900">React</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Front-end Library
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <NetworkIcon className="h-12 w-12 text-blue-500" />
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-blue-900">
                    Node.js
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Runtime Environment
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <DatabaseIcon className="h-12 w-12 text-blue-500" />
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-blue-900">
                    MongoDB
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    NoSQL Database
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <CloudIcon className="h-12 w-12 text-blue-500" />
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-blue-900">AWS</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Cloud Platform
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <WindIcon className="h-12 w-12 text-blue-500" />
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-blue-900">
                    Tailwind CSS
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    CSS Framework
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <FolderGitIcon className="h-12 w-12 text-blue-500" />
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-blue-900">Git</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Version Control
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <TypeIcon className="h-12 w-12 text-blue-500" />
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-blue-900">
                    TypeScript
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Superset of JavaScript
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <ArrowRightIcon className="h-12 w-12 text-blue-500" />
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-blue-900">
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
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
          id="education"
        >
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-900">
                Education
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Check out my academic and professional certifications.
              </p>
            </div>
            <div className="mt-8 grid gap-6">
              <Card className="border-blue-900 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-900">
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
              <Card className="border-blue-900 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-900">
                    AWS Certified Solutions Architect - Associate
                  </CardTitle>
                  <CardDescription>Certified in 2021</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Earning the AWS Certified Solutions Architect - Associate
                    certification demonstrates my expertise in designing and
                    deploying scalable, highly available, and fault-tolerant
                    systems on the AWS platform. This certification has been
                    instrumental in my work on cloud-based web applications.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-blue-900 text-white">
        <p className="text-xs">© 2024 John Doe. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Use
          </Link>
        </nav>
      </footer>
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
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
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

function FolderGitIcon(
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
      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
      <circle cx="12" cy="13" r="2" />
      <path d="M14 13h3" />
      <path d="M7 13h3" />
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
