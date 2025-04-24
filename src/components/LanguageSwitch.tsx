"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "zh" : "en")}
      className="btn-secondary"
    >
      {language === "en" ? "切换中文" : "English"}
    </button>
  );
};
