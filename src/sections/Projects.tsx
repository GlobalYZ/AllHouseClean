"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import placeholder1 from "@/assets/images/light-saas-landing-page.png";
import placeholder2 from "@/assets/images/dark-saas-landing-page.png";

interface Project {
  title: string;
  date: string;
  link: string;
  before: string;
  after: string;
}

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
      <div
        id={id}
        className="sticky top-40"
        style={{ top: `${100 + index * 40}px` }}
      >
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
                  alt="清洁前"
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
                  alt="清洁后"
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
  const portfolioProjects = [
    {
      title: "西南独立屋",
      date: "2025年5月2日",
      link: "#",
      before: "地板有顽固污渍，厨房油渍严重，卫生间有异味",
      after: "地板焕然一新，厨房洁净如新，卫生间清新无异味",
    },
    {
      title: "市中心公寓",
      date: "2025年4月15日",
      link: "#",
      before: "窗户积灰严重，地毯有污渍，浴室水垢明显",
      after: "窗户明亮如新，地毯洁净无痕，浴室焕然一新",
    },
    {
      title: "东区别墅",
      date: "2025年3月28日",
      link: "#",
      before: "庭院杂草丛生，室内灰尘堆积，厨房油污严重",
      after: "庭院整洁美观，室内一尘不染，厨房洁净如新",
    },
  ];

  return (
    <>
      <section className="container scroll-pb-16 lg:py-24 py-16">
        <SectionHeader
          title="成功案例"
          eyebrow="我们的工作"
          description="展示我们专业的清洁服务成果"
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20 min-h-[300vh]">
          {portfolioProjects.map((project, index) => (
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
