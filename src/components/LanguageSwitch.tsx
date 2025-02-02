"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "zh" : "en")}
      className="w-8 py-1 rounded-full bg-white text-sm text-gray-900 font-semibold hover:bg-white/70 transition duration-300"
    >
      {language === "en" ? "中" : "EN"}
    </button>
  );
};
