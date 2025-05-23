"use client";

import Logo from "@/assets/icons/LogoIcon.svg";
import { useLanguage } from "@/contexts/LanguageContext";

export const DescriptionSection = () => {
  const { t } = useLanguage();

  // Get paragraphs array and ensure it's an array of strings
  const paragraphsValue = t("description.paragraphs");
  const paragraphs: string[] = Array.isArray(paragraphsValue)
    ? paragraphsValue.map((p) => (typeof p === "string" ? p : ""))
    : [];

  if (paragraphs.length === 0) {
    console.error("Failed to load description paragraphs");
  }

  return (
    <section id="description-section" className="container">
      <div className="flex justify-center">
        <Logo className="size-16 md:size-36 text-primary-600" />
      </div>

      <div className="max-w-3xl mx-auto space-y-6 mt-8">
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-gray-700 text-base md:text-lg leading-relaxed"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
};
