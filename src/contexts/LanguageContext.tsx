"use client";

import { createContext, useContext, useState } from "react";
import en from "@/constants/lang/en";
import zh from "@/constants/lang/zh";

type Language = "en" | "zh";

// Define specific types for our translation structure
interface TranslationItem {
  title: string;
  description: string;
}

interface RoomData {
  title: string;
  dailyTasks: string[];
  deepTasks: string[];
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => string | string[];
}

const translations: Record<Language, any> = {
  en,
  zh,
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("zh");

  const t = (path: string): string | string[] => {
    try {
      const keys = path.split(".");
      let result: any = translations[language];

      for (const key of keys) {
        result = result[key];
        if (result === undefined) break;
      }

      if (Array.isArray(result) || typeof result === "string") {
        return result;
      }

      return "";
    } catch {
      return "";
    }
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
