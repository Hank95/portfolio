import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/tutorial/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/tutorial/SignUpUserSteps";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import {
  ComponentIcon,
  NetworkIcon,
  DatabaseIcon,
  CloudIcon,
  WindIcon,
  FolderGitIcon,
  TypeIcon,
  ArrowRightIcon,
} from "@/components/Icons";

export default async function Index() {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
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
              <Card className="border-blue-900 shadow-lg dark:bg-gray-100">
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

      <Footer />
    </div>
  );
}
