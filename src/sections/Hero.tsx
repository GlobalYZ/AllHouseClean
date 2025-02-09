"use client";

import memojiImage from "@/assets/images/memoji-coding.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparklesIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/heroOrbit";
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
    <div className="size-[620px] hero-ring"></div>
    <div className="size-[820px] hero-ring"></div>
    <div className="size-[1020px] hero-ring"></div>
    <div className="size-[1220px] hero-ring"></div>
    <HeroOrbit
      size={430}
      rotation={-14}
      shouldOrbit={true}
      orbitDuration={30}
      spinDuration={3}
    >
      <SparklesIcon className="size-8 text-emerald-300/20" />
    </HeroOrbit>
    <HeroOrbit
      size={440}
      rotation={79}
      shouldOrbit={true}
      orbitDuration={34}
      spinDuration={3}
    >
      <SparklesIcon className="size-5 text-emerald-300/20" />
    </HeroOrbit>
    <HeroOrbit size={520} rotation={-41} shouldOrbit={true} orbitDuration={36}>
      <div className="size-2 rounded-full bg-emerald-300/20"></div>
    </HeroOrbit>
    <HeroOrbit
      size={530}
      rotation={178}
      shouldOrbit
      orbitDuration={38}
      spinDuration={3}
    >
      <SparklesIcon className="size-10 text-emerald-300/20" />
    </HeroOrbit>
    <HeroOrbit
      size={550}
      rotation={20}
      shouldOrbit
      orbitDuration={40}
      spinDuration={6}
    >
      <StarIcon className="size-12 text-emerald-300" />
    </HeroOrbit>
    <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration={42}>
      <StarIcon className="size-8 text-emerald-300" />
    </HeroOrbit>
    <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration={44}>
      <div className="size-2 rounded-full bg-emerald-300/20"></div>
    </HeroOrbit>
    <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration={46}>
      <SparklesIcon className="size-14 text-emerald-300/20" />
    </HeroOrbit>
    <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration={48}>
      <div className="size-3 rounded-full bg-emerald-300/20"></div>
    </HeroOrbit>
    <HeroOrbit
      size={800}
      rotation={-72}
      shouldOrbit
      orbitDuration={50}
      spinDuration={6}
    >
      <StarIcon className="size-28 text-emerald-300" />
    </HeroOrbit>
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
      {starRings}
      <section className="container flex flex-col items-center justify-center h-full">
        <Image
          className="size-[100px]"
          src={memojiImage}
          alt="Coding Memoji"
          onLoadingComplete={() => setImageLoaded(true)}
        />
        <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
          <div className="size-2.5 bg-green-500 rounded-full relative">
            <div className="absolute top-0 left-0 w-full h-full bg-green-500 rounded-full animate-ping-large">
              <div className="absolute top-0 left-0 w-full h-full bg-green-500 rounded-full"></div>
            </div>
          </div>
          <div>{t("hero.availability")}</div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            {t("hero.title")}
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            {t("hero.description")}
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 lg:gap-12 mt-8">
          <button
            onClick={handleExploreWork}
            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:scale-105 transition-all duration-300"
          >
            <ArrowDown className="size-4" />
            <span className="font-semibold">{t("hero.buttonOne")}</span>
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl hover:scale-105 transition-all duration-300">
            <span>👋</span>
            <span className="font-semibold">{t("hero.buttonTwo")}</span>
          </button>
        </div>
      </section>
    </div>
  );
};
