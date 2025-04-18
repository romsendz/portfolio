"use client";

import { MenuIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Logo from "./logo";
import { menuItems } from "@/lib/menu-items";
import Link from "next/link";
import clsx from "clsx";
import { SocialIcon } from "react-social-icons";

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
      document.querySelector("header")?.classList.remove("overflow-hidden");
      document.body.classList.add("menu-active");
    } else {
      document.body.classList.remove("menu-active");
      document.querySelector("header")?.classList.add("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("menu-active");
      document.querySelector("header")?.classList.remove("overflow-hidden");
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
        className={clsx(
          "fixed top-0 right-[-100vw] w-screen h-[100dvh] bg-[rgba(190,_219,_255,_0.99)] dark:bg-gray-800 transition-all duration-250 ease-in-out lg:hidden z-10",
          {
            ["translate-x-[-100vw]"]: isOpen,
          }
        )}
      >
        <div className="px-4 py-3 flex items-center justify-between container mx-auto border-b border-gray-700 dark:border-gray-300">
          <Logo />
          <Button variant="outline" size="icon" onClick={toggleMenu}>
            <XIcon />
          </Button>
        </div>
        <ul className="px-6 mt-12 space-y-4 text-center">
          {menuItems.map((item, index) => (
            <li key={item.label}>
              <Link
                target={item.newTab ? "_blank" : "_self"}
                href={item.href}
                className={`py-4 text-3xl inline-flex transition-all duration-250 ease-linear font-bold items-baseline gap-4 ${
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
        <div className="flex justify-center items-center space-x-8 mt-32">
          <SocialIcon
            title="LinkedIn"
            url="https://www.linkedin.com/in/roman-sendziuk/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ height: "3rem", width: "3rem" }}
            className="hover:scale-125 transition-all duration-200 hover:filter hover:brightness-125"
          />
          <SocialIcon
            title="GitHub"
            url="https://github.com/romsendz"
            target="_blank"
            rel="noopener noreferrer"
            style={{ height: "3rem", width: "3rem" }}
            className="hover:scale-125 transition-all duration-200 hover:filter hover:brightness-125"
          />
          <SocialIcon
            title="Facebook"
            url="https://www.facebook.com/roman.sendziuk"
            target="_blank"
            rel="noopener noreferrer"
            style={{ height: "3rem", width: "3rem" }}
            className="hover:scale-125 transition-all duration-200 hover:filter hover:brightness-125"
          />
          <SocialIcon
            title="Email"
            url="mailto:sendzyuk.r@gmail.com,sendzyuk.r@ukr.net"
            target="_blank"
            rel="noopener noreferrer"
            style={{ height: "3rem", width: "3rem" }}
            className="hover:scale-125 transition-all duration-200 hover:filter hover:brightness-125"
          />
        </div>
      </nav>
    </div>
  );
}
