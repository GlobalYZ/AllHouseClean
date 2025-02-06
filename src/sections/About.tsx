"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { CardHeader } from "@/components/About/CardHeader";
import { Card } from "@/components/Card";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import { ToolboxItems } from "@/components/About/ToolboxItems";
import { twMerge } from "tailwind-merge";

import { LinkIcon } from "@/components/About/LinkIcon";
import LinkedinIcon from "@/assets/icons/link-linkedin.svg";
import GithubIcon from "@/assets/icons/link-github.svg";
import DribbleIcon from "@/assets/icons/link-dribble.svg";
import { Map } from "@/components/About/Map";
import { useRef } from "react";
import { motion } from "framer-motion";

const toolboxItems = [
  {
    title: "Javascript",
    iconType: JavascriptIcon,
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
    title: "React",
    iconType: ReactIcon,
  },
];

const linkItems = [
  {
    title: "LinkedIn",
    iconType: LinkedinIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "Dribble",
    iconType: DribbleIcon,
  },
];

const functionalSkills = [
  {
    title: "Web Development",
    emoji: "🌐",
    left: "10%",
    top: "10%",
  },
  {
    title: "Mobile Development",
    emoji: "📱",
    left: "5%",
    top: "50%",
  },
  {
    title: "REST APIs",
    emoji: "🔄",
    left: "35%",
    top: "30%",
  },
  {
    title: "UX/UI",
    emoji: "🎨",
    left: "70%",
    top: "45%",
  },
  {
    title: "SQL Databases",
    emoji: "🗄️",
    left: "50%",
    top: "65%",
  },
  {
    title: "Testing",
    emoji: "🔍",
    left: "65%",
    top: "5%",
  },
  {
    title: "SEO Optimization",
    emoji: "🚀",
    left: "15%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const cardClasses = "h-[320px] p-6 relative flex flex-col gap-4";
  const constraintRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <section className="container py-32">
        <SectionHeader
          title="About Me"
          eyebrow="A Glimpse into my world"
          description="learn more about who I am, what I do and  what inspires me"
        />
        <div className="mt-16 md:mt-24 flex flex-col gap-8 md:gap-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-6">
            <Card className={twMerge(cardClasses, "md:col-span-2")}>
              <CardHeader
                title="Summary"
                description="A web / Frontend developer, located in Edmonton, AB."
              />
              <div className="flex gap-6 absolute bottom-6 left-1/2 -translate-x-1/2">
                {linkItems.map((item) => (
                  <LinkIcon
                    key={item.title}
                    component={item.iconType}
                    title={item.title}
                  />
                ))}
              </div>
            </Card>
            <Card className={twMerge(cardClasses, "p-0 md:col-span-3")}>
              <CardHeader
                title="Dev Toolbox"
                description="Explore my core skills and capabilities"
                className="px-6 pt-6"
              />
              <div className="flex flex-col gap-3">
                <ToolboxItems toolboxItems={toolboxItems} className="mt-6" />
                <ToolboxItems
                  toolboxItems={toolboxItems}
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
                title="Functional Skills"
                description="Explore my core skills"
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
            {/* <Card
              className={twMerge(
                cardClasses,
                "p-0 relative md:col-span-2 lg:col-span-1"
              )}
            >
              <Map />
            </Card> */}
          </div>
        </div>
      </section>
    </>
  );
};
