"use client";

import { createContext, useContext, useState } from "react";
import en from "@/constants/lang/en";
import zh from "@/constants/lang/zh";

type Language = "en" | "zh";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => string;
}

const translations = {
  en,
  zh,
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (path: string): string => {
    const result = path.split(".").reduce((obj, key) => {
      return (obj as any)?.[key] || "";
    }, translations[language]);

    return typeof result === "string" ? result : "";
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
