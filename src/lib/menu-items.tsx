import {
  BookUserIcon,
  BriefcaseBusinessIcon,
  HomeIcon,
  SmileIcon,
} from "lucide-react";

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  gradient: string;
  iconColor: string;
  newTab: boolean;
}

export const menuItems: MenuItem[] = [
  {
    icon: <HomeIcon className="h-5 w-5" />,
    label: "",
    href: "/",
    gradient:
      "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
    iconColor: "text-blue-500",
    newTab: false,
  },

  {
    icon: <BriefcaseBusinessIcon className="h-5 w-5" />,
    label: "Projects",
    href: "/projects",
    gradient:
      "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
    iconColor: "text-green-500",
    newTab: false,
  },
  {
    icon: <BookUserIcon className="h-5 w-5" />,
    label: "Résumé",
    href: "/resume.pdf",
    gradient:
      "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
    iconColor: "text-red-500",
    newTab: true,
  },
  {
    icon: <SmileIcon className="h-5 w-5" />,
    label: "About me",
    href: "/about",
    gradient:
      "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)",
    iconColor: "text-orange-500",
    newTab: false,
  },
];
