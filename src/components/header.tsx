import { ModeToggle } from "./mode-toggle";
import { MenuBar } from "./menu-bar";
import MobileMenu from "./mobile-nav";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="z-10 shadow-lg dark:bg-gray-800 dark:shadow-blue-950 backdrop-filter backdrop-blur-[100px]">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <Logo />
        <MenuBar />
        <ModeToggle />
        <MobileMenu />
      </div>
    </header>
  );
}
