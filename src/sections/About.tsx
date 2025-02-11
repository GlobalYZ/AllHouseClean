"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { CardHeader } from "@/components/About/CardHeader";
import { Card } from "@/components/Card";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import NextIcon from "@/assets/icons/next.svg";
import PythonIcon from "@/assets/icons/python.svg";
import TypescriptIcon from "@/assets/icons/typescript.svg";
import ReactIcon from "@/assets/icons/react.svg";
import NodeIcon from "@/assets/icons/node.svg";
import SqlIcon from "@/assets/icons/sql.svg";
import JestIcon from "@/assets/icons/jest.svg";
import DockerIcon from "@/assets/icons/docker.svg";
import PhpIcon from "@/assets/icons/php.svg";
import FigmaIcon from "@/assets/icons/figma.svg";
import { ToolboxItems } from "@/components/About/ToolboxItems";
import { twMerge } from "tailwind-merge";

import { LinkIcon } from "@/components/About/LinkIcon";
import LinkedinIcon from "@/assets/icons/link-linkedin.svg";
import GithubIcon from "@/assets/icons/link-github.svg";
import DribbleIcon from "@/assets/icons/link-dribble.svg";
import { Map } from "@/components/About/Map";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const toolboxItems = [
  {
    title: "Javascript",
    iconType: JavascriptIcon,
  },
  {
    title: "Typescript",
    iconType: TypescriptIcon,
  },
  {
    title: "HTML5",
    iconType: HtmlIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React Ecosystem",
    iconType: ReactIcon,
  },
  {
    title: "Jest",
    iconType: JestIcon,
  },
  {
    title: "Figma",
    iconType: FigmaIcon,
  },
];

const toolBoxItemsRowTwo = [
  {
    title: "Node.js",
    iconType: NodeIcon,
  },
  {
    title: "Next.js",
    iconType: NextIcon,
  },
  {
    title: "Python",
    iconType: PythonIcon,
  },
  {
    title: "PHP",
    iconType: PhpIcon,
  },
  {
    title: "SQL",
    iconType: SqlIcon,
  },
  {
    title: "Docker",
    iconType: DockerIcon,
  },
];

const linkItems = [
  {
    title: "LinkedIn",
    iconType: LinkedinIcon,
    link: "https://linkedin.com/in/muyangli1996",
  },
  {
    title: "Github",
    iconType: GithubIcon,
    link: "https://github.com/GlobalYZ",
  },
  {
    title: "Dribble",
    iconType: DribbleIcon,
    link: "https://dribbble.com/Muyang111",
  },
];

export const AboutSection = () => {
  const cardClasses = "h-[320px] p-6 relative flex flex-col gap-4";
  const constraintRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const functionalSkills = [
    {
      title: t("toolBox.skills.webDevelopment"),
      emoji: "🌐",
      left: "10%",
      top: "10%",
    },
    {
      title: t("toolBox.skills.mobileDevelopment"),
      emoji: "📱",
      left: "5%",
      top: "50%",
    },
    {
      title: t("toolBox.skills.RESTAPI"),
      emoji: "🔄",
      left: "35%",
      top: "30%",
    },
    {
      title: t("toolBox.skills.uxUI"),
      emoji: "🎨",
      left: "70%",
      top: "45%",
    },
    {
      title: t("toolBox.skills.sql"),
      emoji: "🗄️",
      left: "50%",
      top: "65%",
    },
    {
      title: t("toolBox.skills.testing"),
      emoji: "🔍",
      left: "65%",
      top: "5%",
    },
    {
      title: t("toolBox.skills.seo"),
      emoji: "🚀",
      left: "15%",
      top: "70%",
    },
  ];

  return (
    <>
      <section className="container py-24">
        <SectionHeader
          title={t("toolBox.title")}
          eyebrow={t("toolBox.top")}
          description={t("toolBox.description")}
        />
        <div className="mt-8 md:mt-16 flex flex-col gap-8 md:gap-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-6">
            <Card className={twMerge(cardClasses, "md:col-span-2")}>
              <CardHeader
                title={t("toolBox.summary.title")}
                description={t("toolBox.summary.description")}
              />
              <div className="flex gap-6 absolute bottom-8 left-1/2 -translate-x-1/2">
                {linkItems.map((item) => (
                  <LinkIcon
                    key={item.title}
                    component={item.iconType}
                    title={item.title}
                    link={item.link}
                  />
                ))}
              </div>
            </Card>
            <Card className={twMerge(cardClasses, "p-0 md:col-span-3")}>
              <CardHeader
                title={t("toolBox.devtools.title")}
                description={t("toolBox.devtools.description")}
                className="px-6 pt-6"
              />
              <div className="flex flex-col gap-3">
                <ToolboxItems toolboxItems={toolboxItems} className="mt-6" />
                <ToolboxItems
                  toolboxItems={toolBoxItemsRowTwo}
                  direction="right"
                  itemsWrapperClassName="-translate-x-1/2"
                />
              </div>
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3 md:gap-6">
            <Card
              className={twMerge(
                cardClasses,
                "p-0 md:col-span-3 lg:col-span-2"
              )}
            >
              <CardHeader
                title={t("toolBox.skills.title")}
                description={t("toolBox.skills.description")}
                className="px-6 pt-6"
              />
              <div className="flex-1 h-[220px] relative" ref={constraintRef}>
                {functionalSkills.map((item) => (
                  <motion.div
                    key={item.title}
                    className="inline-flex items-center gap-2 gradient-bg rounded-full px-3 py-1 absolute"
                    style={{
                      left: item.left,
                      top: item.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="text-sm font-medium text-gray-950">
                      {item.title}
                    </span>
                    <span>{item.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card
              className={twMerge(
                cardClasses,
                "p-0 relative md:col-span-2 lg:col-span-1"
              )}
            >
              <Map />
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};
