import SpotlightCard from "@/components/spotlight-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { ExternalLinkIcon, MonitorIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: `beauty-zone`,
    description: (
      <>
        <p>
          A simple, but modern and visually appealing landing page for a company
          in the beauty industry.
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
    img: `/beauty-zone.png`,
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
    img: `/ugcc-pokrov-v1.png`,
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
          This is a complete rewrite of the original project with a new design
          and improved performance. Designed to provide a modern, user-friendly
          platform for the local community to access church-related information.
          Features a CMS-like structure allowing authenticated admins to update
          content dynamically. Implements NextAuth with credential-based
          authentication for secure admin access. Fully responsive design
          ensures accessibility across all devices.
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
    img: `/ugcc-pokrov-v2.png`,
    technologies: [
      `React`,
      `Next.js`,
      `TypeScript`,
      `Tailwind CSS`,
      `SASS/SCSS`,
      `Prisma ORM`,
      `Supabase (PostgreSQL)`,
      `Tanstak-Query`,
      `React Context API`,
      `NextAuth.js`,
      "React Hook Form",
      `Zod`,
      `Rest API`,
      `Responsive Design`,
      `CSR`,
      `SSR`,
    ],
  },
];

const Page = () => {
  return (
    <div className="flex container flex-col items-center space-y-8 my-16 mx-auto px-8">
      {projects.map((project) => {
        return (
          <SpotlightCard
            id={project.title}
            key={project.title}
            className={clsx(
              "flex backdrop-filter backdrop-blur-[100px] flex-row w-full px-8 py-12 bg-transparent gap-12 relative hover:opacity-100 transition-all duration-200",
              { ["opacity-50"]: project.archived }
            )}
            spotlightColor="rgba(168, 141, 235, 0.14)"
          >
            <div className="flex items-start justify-center m-0 shrink-0">
              <Image
                src={project.img}
                alt={`preview: ${project.title}`}
                priority
                height={400}
                width={400}
                className="hover:scale-110 transition-all duration-200 rounded-2xl"
              />
            </div>
            <div className="flex flex-col justify-between gap-8 grow-1">
              <div>
                <h2 className="text-3xl font-bold">{project.title}</h2>
                <br />
                <hr />
                <br />

                {project.description}
              </div>

              <div className="gap-2 flex flex-wrap mt-4 ">
                {project.technologies.map((tech) => (
                  <Badge variant="outline" className="text-md" key={tech}>
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="absolute top-4 right-4 flex items-center gap-4">
              {project.archived && (
                <span className="text-slate-400 italic">archived</span>
              )}

              <Button
                asChild
                title={project.archived ? "Preview (archived)" : "Preview"}
                variant={project.archived ? "ghost" : "default"}
              >
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.link}
                >
                  <MonitorIcon />
                </Link>
              </Button>
            </div>
          </SpotlightCard>
        );
      })}
    </div>
  );
};

export default Page;
