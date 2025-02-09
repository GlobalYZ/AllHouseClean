"use client";

import snewsCover from "@/assets/images/SNEWS.png";
import vacapalCover from "@/assets/images/vacapal.png";
import portfolioCover from "@/assets/images/portfolio.jpg";
import taleMalerCover from "@/assets/images/TaleMaker.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image, { StaticImageData } from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { Card } from "@/components/Card";
import { useScrollEffect } from "@/hooks/useScrollEffect";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
interface Project {
  company: string;
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
            </div>

            <h3 className="text-2xl font-serif mt-2 md:mt-5 md:text-4xl">
              {project.title}
            </h3>
            <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
            <ul className="flex flex-col gap-4 mt-4 md:mt-5">
              {project.results.map((result) => (
                <li
                  key={result.title}
                  className="flex items-center gap-2 text-sm md:text-base text-white/50 "
                >
                  <CheckCircleIcon className="size-5 md:size-6 min-w-5 min-h-5" />
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

export const ProjectsSection = () => {
  const { t } = useLanguage();

  const portfolioProjects = [
    {
      company: t("projectItems.ProjectOne.company"),
      title: t("projectItems.ProjectOne.title"),
      results: t("projectItems.ProjectOne.results")
        .split("。")
        .filter((result) => result.trim() !== "")
        .map((result) => ({ title: result })),
      link: "#",
      image: portfolioCover,
    },
    {
      company: t("projectItems.ProjectTwo.company"),
      title: t("projectItems.ProjectTwo.title"),
      results: t("projectItems.ProjectTwo.results")
        .split("。")
        .filter((result) => result.trim() !== "")
        .map((result) => ({ title: result })),
      link: "https://youtu.be/jKHDxArC5c8",
      image: snewsCover,
    },
    {
      company: t("projectItems.ProjectThree.company"),
      title: t("projectItems.ProjectThree.title"),
      results: t("projectItems.ProjectThree.results")
        .split("。")
        .filter((result) => result.trim() !== "")
        .map((result) => ({ title: result })),
      link: "https://www.youtube.com/watch?v=f8QPXhOJlO0",
      image: vacapalCover,
    },
    {
      company: t("projectItems.ProjectFour.company"),
      title: t("projectItems.ProjectFour.title"),
      results: t("projectItems.ProjectFour.results")
        .split("。")
        .filter((result) => result.trim() !== "")
        .map((result) => ({ title: result })),
      link: "https://youtu.be/OGiRua0rEb4",
      image: taleMalerCover,
    },
  ];

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
          title={t("projectItems.title")}
          eyebrow={t("projectItems.top")}
          description={t("projectItems.description")}
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
