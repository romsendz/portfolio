import SpotlightCard from "@/components/spotlight-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/lib/PROJECTS";
import clsx from "clsx";
import { ExternalLinkIcon, MonitorIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex container flex-col items-center space-y-8 mt-4 lg:mt-8 mb-4 mx-auto px-8">
      {PROJECTS.map((project) => {
        return (
          <SpotlightCard
            id={project.title}
            key={project.title}
            className={clsx(
              "flex backdrop-filter text-center lg:text-start backdrop-blur-[100px] flex-col lg:flex-row w-full px-4 py-6 lg:px-8 lg:py-12 bg-transparent gap-4 lg:gap-12 relative hover:opacity-100 transition-all duration-200",
              { ["opacity-50"]: project.archived }
            )}
            spotlightColor="rgba(168, 141, 235, 0.14)"
          >
            <div className="flex items-start justify-center m-0 shrink-0">
              <Image
                src={project.img}
                alt={`preview: ${project.title}`}
                priority
                height={200}
                width={200}
                className="hover:scale-105 transition-all duration-200 rounded-2xl max-w-[200px] max-h-[200px] lg:max-w-[300px] lg:max-h-[300px] object-contain w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-between gap-2 lg:gap-4 grow-1">
              <div>
                <h2 className="text-xl lg:text-2xl font-bold">
                  {project.title}
                </h2>
                <hr className="my-2" />
                <div className="text-sm">{project.description}</div>
              </div>

              <div className="gap-2 flex flex-wrap mt-4 justify-center lg:justify-start">
                {project.technologies.map((tech) => (
                  <Badge variant="outline" className="text-xs" key={tech}>
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
                className="hidden lg:block"
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
            <Button
              asChild
              title={project.archived ? "Preview (archived)" : "Preview"}
              className="block lg:hidden mt-4"
            >
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={project.link}
                className="inline-flex items-center gap-2"
              >
                <MonitorIcon />
                {project.archived ? "Preview (archived)" : "Preview"}
              </Link>
            </Button>
          </SpotlightCard>
        );
      })}
    </div>
  );
};

export default Page;
