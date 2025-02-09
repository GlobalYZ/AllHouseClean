"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitch } from "@/components/LanguageSwitch";

export const Header = () => {
  const { t } = useLanguage();

  const handleScrollToSection = (index: number) => {
    const section = document.getElementsByTagName("section")[index];
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: sectionTop - 120,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex justify-center items-center fixed z-10 top-6 left-1/2 -translate-x-1/2">
      <nav className="flex items-center md:gap-1 md:p-0.5 border border-white/15 rounded-full bg-white/5 backdrop-blur">
        <a
          href="#home"
          className="nav-item text-nowrap"
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection(0);
            window.history.pushState(null, "", "#home");
          }}
        >
          {t("home")}
        </a>
        <a
          href="#projects"
          className="nav-item text-nowrap"
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection(1);
            window.history.pushState(null, "", "#projects");
          }}
        >
          {t("projects")}
        </a>
        <a
          href="#testimonials"
          className="nav-item text-nowrap"
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection(2);
            window.history.pushState(null, "", "#testimonials");
          }}
        >
          {t("testimonials")}
        </a>
        <a
          href="#contact"
          className="nav-item text-nowrap"
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection(3);
            window.history.pushState(null, "", "#contact");
          }}
        >
          {t("about")}
        </a>
        <LanguageSwitch />
      </nav>
    </div>
  );
};
