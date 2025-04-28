import { ModeToggle } from "./mode-toggle";
import { MenuBar } from "./menu-bar";
import MobileMenu from "./mobile-nav";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="z-2 shadow-lg dark:bg-gray-800 dark:shadow-blue-950 backdrop-filter backdrop-blur-[100px] overflow-hidden">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <div className="[flex-basis:calc(100%/3)]">
          <Logo />
        </div>
        <div className="[flex-basis:calc(100%/3)] flex justify-center">
          <MenuBar />
        </div>
        <div className="[flex-basis:calc(100%/3)] flex justify-end items-center">
          <ModeToggle />
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
