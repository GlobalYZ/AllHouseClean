"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "zh" : "en")}
      className="text-sm text-gray-600"
    >
      {language === "en" ? "切换中文" : "English"}
    </button>
  );
};
