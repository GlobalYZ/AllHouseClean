"use client";

import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image, { StaticImageData } from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { Card } from "@/components/Card";
import { useScrollEffect } from "@/hooks/useScrollEffect";
import { useEffect, useState } from "react";

interface Project {
  company: string;
  year: string;
  title: string;
  results: { title: string }[];
  link: string;
  image: StaticImageData;
}

const ProjectCard = ({
  project,
  isVisible,
  id,
}: {
  project: Project;
  isVisible: boolean;
  id: string;
}) => {
  return (
    <div id={id}>
      <Card
        key={project.title}
        className={`pt-8 px-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          <div className="lg:pb-16">
            <div className="gradient-text font-bold gap-2 text-sm">
              <span>{project.company}</span>
              <br />
              <span>{project.year}</span>
            </div>

            <h3 className="text-2xl font-serif mt-2 md:mt-5 md:text-4xl">
              {project.title}
            </h3>
            <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
            <ul className="flex flex-col gap-4 mt-4 md:mt-5">
              {project.results.map((result) => (
                <li
                  key={result.title}
                  className="flex items-center gap-2 text-sm md:text-base text-white/50"
                >
                  <CheckCircleIcon className="size-5 md:size-6" />
                  <span>{result.title}</span>
                </li>
              ))}
            </ul>
            <a href={project.link} className="btn my-8">
              <span>Explore More</span>
              <ArrowUpRightIcon className="size-4" />
            </a>
          </div>
          <div className="relative">
            <Image
              src={project.image}
              alt={project.title}
              className="-mb-4 md:-mb-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    Array(portfolioProjects.length).fill(false)
  );

  useScrollEffect(400, (currentPosition) => {
    portfolioProjects.forEach((_, index) => {
      const cardTop = document.getElementById(`project-${index}`)?.offsetTop;
      if (currentPosition >= cardTop! - 400) {
        setVisibleCards((prev) => {
          const newVisibility = [...prev];
          newVisibility[index] = true;
          return newVisibility;
        });
      } else {
        setVisibleCards((prev) => {
          const newVisibility = [...prev];
          newVisibility[index] = false;
          return newVisibility;
        });
      }
    });
  });

  return (
    <>
      <section className="container scroll-pb-16 lg:py-24">
        <SectionHeader
          title="Featured Projects"
          eyebrow="Real-world Results"
          description="See how I created engaging digital experiences."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              id={`project-${index}`}
              project={project}
              isVisible={visibleCards[index]}
            />
          ))}
        </div>
      </section>
    </>
  );
};
