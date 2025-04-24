"use client";

import memojiImage from "@/assets/images/memoji-coding.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import backgroundImage from "@/assets/images/heroBg.jpeg";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";

const starRings = (
  <div
    className="absolute inset-0 overflow-hidden -z-10"
    style={{
      maskImage:
        "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0))",
    }}
  >
    <div
      className="absolute inset-0 -z-10 opacity-5"
      style={{ backgroundImage: `url(${grainImage.src})` }}
    ></div>
  </div>
);

interface HeroSectionProps {
  onLoadComplete?: () => void;
}

export const HeroSection = ({ onLoadComplete }: HeroSectionProps) => {
  const { t } = useLanguage();
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (imageLoaded && onLoadComplete) {
      onLoadComplete();
    }
  }, [imageLoaded, onLoadComplete]);

  const handleExploreWork = () => {
    const top = document.getElementsByTagName("section")[1].offsetTop - 100;
    console.log("explore work");
    window.scrollTo({
      top: top,
      behavior: "smooth",
    });
  };

  return (
    <div className="h-screen py-32 md:py-48 lg:py-60 relative z-0 overflow-x-hidden">
      <section className="container h-full p-20">
        <Image
          className="size-full object-cover absolute inset-0"
          src={backgroundImage}
          alt="Hero Background"
          onLoad={() => setImageLoaded(true)}
        />

        <button
          onClick={handleExploreWork}
          className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:scale-105 transition-all duration-300"
        >
          <ArrowDown className="size-4" />
          <span className="font-semibold">{t("hero.buttonOne")}</span>
        </button>
        <button
          onClick={() => window.open("https://linkedin.com/in/muyangli1996")}
          className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl hover:scale-105 transition-all duration-300"
        >
          <span>👋</span>
          <span className="font-semibold">{t("hero.buttonTwo")}</span>
        </button>
      </section>
    </div>
  );
};
