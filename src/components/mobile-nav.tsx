"use client";

import { MenuIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Logo from "./logo";
import { menuItems } from "@/lib/menu-items";
import Link from "next/link";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // close menu when link is clicked in navigation
  const handleMenuClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    const link = target.closest("a"); // Check if the clicked element is inside an <a>
    if (link) {
      setIsOpen(false);
    }
  };

  // disable scroll on body when menu is opened
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("menu-active");
    } else {
      document.body.classList.remove("menu-active");
    }
    return () => {
      document.body.classList.remove("menu-active");
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden" onClick={handleMenuClick}>
      <div className="grid place-content-center w-full">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleMenu}
          className="hover:scale-105 transition-transform"
        >
          {isOpen ? <XIcon /> : <MenuIcon />}
        </Button>
      </div>
      <nav
        className={`fixed top-0 right-0 w-screen h-screen bg-[rgba(190,_219,_255,_0.99)] dark:bg-gray-800 transition-all duration-250 ease-in-out  ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-4 py-3 flex items-center justify-between container mx-auto">
          <Logo />
          <Button variant="outline" size="icon" onClick={toggleMenu}>
            <XIcon />
          </Button>
        </div>
        <div className="h-px w-full bg-gray-500 mt-4"></div>
        <ul className="px-6 mt-12 space-y-4 text-center">
          {menuItems.map((item, index) => (
            <li key={item.label}>
              <Link
                target={item.newTab ? "_blank" : "_self"}
                href={item.href}
                className={`py-4 text-3xl inline-flex transition-transform duration-250 ease-linear font-bold items-baseline gap-4 ${
                  isOpen ? "translate-x-0" : "translate-x-full"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {item.label}
                {item.icon}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
