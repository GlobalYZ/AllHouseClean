"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitch } from "@/components/LanguageSwitch";

export const Header = () => {
  const { t } = useLanguage();

  return (
    <div className="flex justify-center items-center fixed z-10 top-6 left-1/2 -translate-x-1/2">
      <nav className="flex md:gap-1 md:p-0.5 border border-white/15 rounded-full bg-white/5 backdrop-blur">
        <a href="#" className="nav-item">
          {t("home")}
        </a>
        <a href="#" className="nav-item">
          {t("projects")}
        </a>
        <a href="#" className="nav-item">
          {t("about")}
        </a>
        <a href="#" className="nav-item">
          {t("contact")}
        </a>
        <LanguageSwitch />
      </nav>
    </div>
  );
};
