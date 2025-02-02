import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import { TechIcon } from "@/components/About/TechIcon";

import { LinkIcon } from "@/components/About/LinkIcon";
import LinkedinIcon from "@/assets/icons/link-linkedin.svg";
import GithubIcon from "@/assets/icons/link-github.svg";
import DribbleIcon from "@/assets/icons/link-dribble.svg";

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
  },
  {
    title: "Mobile Development",
    emoji: "📱",
  },
  {
    title: "UX Mockups",
    emoji: "🔧",
  },
  {
    title: "UI Design",
    emoji: "🎨",
  },
  {
    title: "REST APIs",
    emoji: "🔄",
  },
  {
    title: "SQL/NoSQL Databases",
    emoji: "🗄️",
  },
  {
    title: "Testing & Debugging",
    emoji: "🔍",
  },
  {
    title: "SEO Optimization",
    emoji: "🚀",
  },
];

export const AboutSection = () => {
  return (
    <>
      <section className="container pt-32">
        <SectionHeader
          title="About Me"
          eyebrow="A Glimpse into my world"
          description="learn more about who I am, what I do and  what inspires me"
        />
        <div className="mt-20">
          <Card className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2">
              <StarIcon className="size-9 text-emerald-300" />
              <h3 className="text-3xl sans-serif">Summary</h3>
            </div>

            <p className="text-sm text-white/60">
              A web & mobile developer, located in Canada, AB.
            </p>
            <div className="flex justify-center gap-6">
              {linkItems.map((item) => (
                <LinkIcon
                  key={item.title}
                  component={item.iconType}
                  title={item.title}
                />
              ))}
            </div>
          </Card>
          <Card>
            <div>
              <h3>Dev Toolbox</h3>
              <div>
                {toolboxItems.map((item) => (
                  <div key={item.title}>
                    <TechIcon component={item.iconType} />
                    <span>{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
          <Card>
            <div>
              <StarIcon />
              <h3>Functional Skills</h3>
              <div>
                {functionalSkills.map((item) => (
                  <div key={item.title}>
                    <span>{item.title}</span>
                    <span>{item.emoji}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
};
