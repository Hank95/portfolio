import Link from "next/link";
import { BriefcaseIcon } from "../components/Icons";
export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-[#4d6e5e] text-white">
      <Link className="flex items-center justify-center" href="#">
        <BriefcaseIcon className="h-6 w-6" />
        <span className="sr-only">Henry Pendleton's Portfolio</span>
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
  );
}
