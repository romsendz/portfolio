import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { MenuBar } from "./menu-bar";

export default function Header() {
  return (
    <header className="z-10 shadow-lg dark:bg-gray-800 dark:shadow-blue-950 backdrop-filter backdrop-blur-[100px]">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <Link
          className="text-4xl p-4 font-audiowide hover:text-blue-300 transition-colors whitespace-nowrap underline"
          href="/"
        >
          R | S
        </Link>
        <MenuBar />
        <ModeToggle />
      </div>
    </header>
  );
}
