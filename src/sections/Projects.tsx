"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import placeholder1 from "@/assets/images/light-saas-landing-page.png";
import placeholder2 from "@/assets/images/dark-saas-landing-page.png";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Project } from "@/types/project";

const ProjectCard = React.memo(
  ({ project, id, index }: { project: Project; id: string; index: number }) => {
    const [showAfter, setShowAfter] = useState(false);

    React.useEffect(() => {
      const interval = setInterval(() => {
        setShowAfter((prev) => !prev);
      }, 3000);
      return () => clearInterval(interval);
    }, []);

    return (
      <div id={id} className="sticky" style={{ top: `${100 + index * 40}px` }}>
        <Card
          key={project.title}
          className="projects pt-8 px-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20"
        >
          <div className="lg:flex lg:items-center lg:gap-12">
            <div className="lg:w-[200px] lg:pb-16 lg:max-w-[50%]">
              <h3 className="text-2xl font-serif mt-2 md:mt-5 md:text-4xl">
                {project.title}
              </h3>
              <div className="gradient-text font-bold gap-2 text-sm mt-2">
                <span>{project.date}</span>
              </div>
              <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
            </div>
            <div className="relative h-[200px] md:h-[350px] lg:flex-1 lg:w-[500px] lg:flex-shrink-0 bg-gray-800 rounded-lg overflow-hidden p-4">
              <div
                className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                  showAfter
                    ? "opacity-0 -translate-y-4"
                    : "opacity-100 translate-y-0"
                }`}
              >
                <Image
                  src={placeholder1}
                  alt={project.before}
                  className="object-contain"
                  priority
                />
              </div>
              <div
                className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                  showAfter
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <Image
                  src={placeholder2}
                  alt={project.after}
                  className="object-contain"
                  fill
                  priority
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

export const ProjectsSection = () => {
  const { t } = useLanguage();
  const getTranslatedString = (path: string): string => {
    const value = t(path);
    return typeof value === "string" ? value : "";
  };

  const projectsData = t("projects.items");
  if (!Array.isArray(projectsData)) {
    console.error("Projects items is not an array");
    return null;
  }

  // Validate and transform the data
  const projects = projectsData
    .map((item) => {
      if (
        typeof item === "object" &&
        item !== null &&
        typeof (item as any).title === "string" &&
        typeof (item as any).date === "string" &&
        typeof (item as any).link === "string" &&
        typeof (item as any).before === "string" &&
        typeof (item as any).after === "string"
      ) {
        return item as Project;
      }
      console.error("Invalid project item:", item);
      return null;
    })
    .filter((item): item is Project => item !== null);

  if (projects.length === 0) {
    console.error("No valid projects found");
    return null;
  }

  return (
    <>
      <section
        id="projects-section"
        className="container scroll-mt-16 relative"
      >
        <SectionHeader
          title={getTranslatedString("projects.header.title")}
          eyebrow={getTranslatedString("projects.header.eyebrow")}
          description={getTranslatedString("projects.header.description")}
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20 min-h-[300vh] relative">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              id={`project-${index}`}
              project={project}
              index={index}
            />
          ))}
        </div>
      </section>
    </>
  );
};
