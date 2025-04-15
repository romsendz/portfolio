"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { menuItems } from "@/lib/menu-items";

const glowVariants = {
  initial: { opacity: 0, scale: 1 },
  hover: {
    opacity: 1,
    scale: 1.5,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
    },
  },
};

const navGlowVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export function MenuBar() {
  const pathname = usePathname();
  return (
    <motion.nav
      className="p-2 rounded-2xl bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-lg border border-border/40 shadow-sm relative overflow-hidden hidden lg:block "
      initial="initial"
      whileHover="hover"
    >
      <motion.div
        className={` to-transparent rounded-3xl z-0 pointer-events-none`}
        variants={navGlowVariants}
      />
      <ul className="flex items-center gap-2 relative z-10">
        {menuItems.map((item) => (
          <motion.li key={item.label} className="relative">
            <motion.div
              className="block rounded-xl overflow-visible group relative"
              style={{ perspective: "600px" }}
              whileHover="hover"
              initial="initial"
            >
              <motion.div
                className="absolute inset-0 z-0 pointer-events-none"
                variants={glowVariants}
                style={{
                  background:
                    pathname !== item.href ? item.gradient : "transparent",
                  borderRadius: "16px",
                }}
              />
              <Link
                href={item.href}
                target={item.newTab ? "_blank" : "_self"}
                className={`flex items-center gap-2 px-4 py-2 relative z-10 transition-all rounded-xl ${
                  pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground group-hover:text-foreground"
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "center",
                  color: pathname === item.href ? item.iconColor : "inherit",
                }}
              >
                <span
                  className={`transition-colors duration-300 ${
                    pathname === item.href
                      ? item.iconColor
                      : `group-hover:${item.iconColor}`
                  }`}
                >
                  {item.icon}
                </span>
                {!!item.label && (
                  <span
                    className={`transition-colors duration-300 ${
                      pathname === item.href
                        ? item.iconColor
                        : `group-hover:${item.iconColor}`
                    }`}
                  >
                    {item.label}
                  </span>
                )}
              </Link>
            </motion.div>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}
