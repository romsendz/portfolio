import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";

export const PROJECTS = [
  {
    title: `beauty-zone`,
    description: (
      <>
        <p>
          A simple, but reasonable landing page for a company in the beauty
          industry.
        </p>
        <br />
        <p>
          This project showcases a clean and responsive design, utilizing HTML,
          CSS, and SASS for styling, along with JavaScript for interactive
          elements.
        </p>
      </>
    ),
    link: `https://romsendz.github.io/beauty-zone`,
    archived: false,
    img: `/beauty-zone.jpg`,
    technologies: [
      "HTML",
      "JavaScript",
      "CSS",
      "SASS",
      "Swiper.js",
      "Responsive Design",
    ],
  },
  {
    title: `ugcc-pokrov-v2`,
    description: (
      <>
        <p>
          A full-stack web application rebuilt for the UGCC Church in my lovely
          hometown -{" "}
          <Link
            href={"https://maps.app.goo.gl/3sw5twypAqMgWVoZA"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-500 hover:text-blue-700"
          >
            Zalishchyky
            <ExternalLinkIcon className="w-4" />
          </Link>
          .
        </p>
        <br />
        <p>
          This is a complete rewrite of the{" "}
          <Link
            className="text-blue-500 hover:text-blue-700"
            href={"#ugcc-pokrov"}
          >
            {" "}
            original project
          </Link>{" "}
          with a new design and improved performance. Designed to provide a
          modern, user-friendly platform for the local community to access
          church-related information. Features a CMS-like structure allowing
          authenticated admins to update content dynamically. Implements
          NextAuth with credential-based authentication for secure admin access.
          Fully responsive design ensures accessibility across all devices.
        </p>
        <br />
        <p>
          The goal is to strengthen the connection between the church and the
          community by providing a centralized hub for updates and resources.
        </p>
      </>
    ),
    link: `https://ugcc-pokrov.te.ua`,
    archived: false,
    img: `/ugcc-pokrov-v2.jpg`,
    technologies: [
      `React`,
      `Next.js`,
      `TypeScript`,
      `Tailwind CSS`,
      `SASS/SCSS`,
      `Prisma ORM`,
      `Supabase (PostgreSQL)`,
      `Tanstak Query`,
      `React Context API`,
      `NextAuth.js`,
      `React Hook Form`,
      `Zod`,
      `Rest API`,
      `Quill JS`,
      `Responsive Design`,
      `CSR`,
      `SSR`,
    ],
  },
  {
    title: `hp-world`,
    description: (
      <>
        <p>
          HP World is a fully responsive web application, designed to provide a
          basic wiki information about the Harry Potter universe. Utilized{" "}
          <Link
            href={"https://github.com/fedeperin/potterapi"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-500 hover:text-blue-700"
          >
            PotterAPI by fedeperin
            <ExternalLinkIcon className="w-4" />
          </Link>{" "}
          as a data / API source.
        </p>
        <br />
        <p>
          Optimized for all devices, from mobile to desktop, using a
          mobile-first approach.
        </p>
        <p>
          Supports 6 languages: English, Español, Français, Italiano, Português,
          Українська.
        </p>
        <p>
          Includes pages for exploring books, characters, houses, and spells
          from the Harry Potter universe, with data fetched dynamically from an
          external API. Powered by React Query for efficient data fetching,
          caching, and synchronization.
        </p>
        <br />
        <p>
          The goal of this project was to play around with status-quo tools and
          features. It served as a playground to explore different tools and
          approaches.
        </p>
      </>
    ),
    link: `https://hp-world.vercel.app/`,
    archived: false,
    img: `/hp-world.jpg`,
    technologies: [
      `React`,
      `TypeScript`,
      `CSS`,
      `SASS/SCSS`,
      `Tanstak Query`,
      `i18next`,
      `Vite`,
      `GitHub Actions (CI/CD)`,
      `Responsive Design`,
      `Rest API`,
    ],
  },

  {
    title: `portfolio`,
    description: (
      <>
        <p>
          Modern and responsive portfolio website showcasing personal projects
          and other info about me.
        </p>
      </>
    ),
    link: `https://portfolio-romsendz.vercel.app/`,
    archived: false,
    img: `/portfolio.jpg`,
    technologies: [
      `React`,
      `TypeScript`,
      `Next.js`,
      `CSS`,
      `Tailwind CSS`,
      `Framer Motion`,
      `Responsive Design`,
    ],
  },
  {
    title: `ugcc-pokrov`,
    description: (
      <>
        <p>
          A volunteer-driven React project for the UGCC Church in my lovely
          hometown of{" "}
          <Link
            href={"https://maps.app.goo.gl/3sw5twypAqMgWVoZA"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-500 hover:text-blue-700"
          >
            Zalishchyky
            <ExternalLinkIcon className="w-4" />
          </Link>
          .
        </p>
        <br />
        <p>
          The goal was to create a simple and accessible website for the church,
          allowing the community to view live streams, check the schedule of
          services, and access essential information. The project was{" "}
          <span className="italic">archived </span>
          as it served its purpose and was replaced by a more{" "}
          <Link
            className="text-blue-500 hover:text-blue-700"
            href={"#ugcc-pokrov-v2"}
          >
            {" "}
            modern application
          </Link>
          .
        </p>
      </>
    ),
    link: `https://church-website-eta.vercel.app/`,
    archived: true,
    img: `/ugcc-pokrov-v1.jpg`,
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Rest API",
      "GCloud",
    ],
  },
];
