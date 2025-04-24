"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "zh" : "en")}
      className="w-24 py-2 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition duration-300"
    >
      {language === "en" ? "中" : "EN"}
    </button>
  );
};
