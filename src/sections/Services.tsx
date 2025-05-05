"use client";

import { SectionHeader } from "@/components/SectionHeader";
import CleanHandsIcon from "@/assets/icons/clean-hands.svg";
import DeepCleaningIcon from "@/assets/icons/dusting.svg";
import RegularMaintenanceIcon from "@/assets/icons/dusting.svg";
import { useLanguage } from "@/contexts/LanguageContext";
import { FC } from "react";

interface ServiceItem {
  title: string;
  description: string;
  icon: FC<{ className?: string }>;
  link: string;
}

interface ServiceTranslation {
  title: string;
  description: string;
}

interface ServicesTranslations {
  header: {
    eyebrow: string;
    title: string;
    description: string;
  };
  items: ServiceTranslation[];
}

export const Services: FC = () => {
  const { t } = useLanguage();

  const getTranslatedString = (path: string): string => {
    const value = t(path);
    return typeof value === "string" ? value : "";
  };

  const getTranslatedServiceItem = (index: number): ServiceTranslation => {
    const title = getTranslatedString(`services.items.${index}.title`);
    const description = getTranslatedString(
      `services.items.${index}.description`
    );

    return {
      title,
      description,
    };
  };

  const translations: ServicesTranslations = {
    header: {
      eyebrow: getTranslatedString("services.header.eyebrow"),
      title: getTranslatedString("services.header.title"),
      description: getTranslatedString("services.header.description"),
    },
    items: [0, 1, 2].map(getTranslatedServiceItem),
  };

  const icons = [CleanHandsIcon, DeepCleaningIcon, RegularMaintenanceIcon];

  const services: ServiceItem[] = translations.items.map((item, index) => ({
    ...item,
    icon: icons[index],
    link: "#",
  }));

  return (
    <section className="py-16 px-4 container mx-auto">
      <SectionHeader
        eyebrow={translations.header.eyebrow}
        title={translations.header.title}
        description={translations.header.description}
      />
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.1)] bg-white md:h-[300px] lg:h-[350px] flex flex-col items-center text-center"
          >
            <div className="mb-4 w-16 h-16 rounded-full bg-gradient-to-br from-primary-50 to-primary-100 flex justify-center items-center">
              <service.icon className="size-8" />
            </div>
            <h3 className="font-semibold font-serif mb-2 gradient-text flex flex-col">
              {service.title.split(" ").map((word, i) => (
                <span key={i}>{word}</span>
              ))}
            </h3>
            <p className="text-black text-sm flex-grow mt-3 leading-snug">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
