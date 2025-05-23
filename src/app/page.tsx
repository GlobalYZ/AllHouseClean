"use client";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import dynamic from "next/dynamic";
import { Loader } from "@/components/loader";
import { useState, useEffect } from "react";
import { DescriptionSection } from "@/sections/Description";
// Lazy load sections that are below the fold
const Services = dynamic(() =>
  import("@/sections/Services").then((mod) => mod.Services)
);
// const ProjectsSection = dynamic(() =>
//   import("@/sections/Projects").then((mod) => mod.ProjectsSection)
// );

const CheckList = dynamic(() =>
  import("@/sections/CheckList").then((mod) => mod.CheckList)
);

const WhyUs = dynamic(() =>
  import("@/sections/WhyUs").then((mod) => mod.WhyUsSection)
);

const TestimonialsSection = dynamic(() =>
  import("@/sections/Testimonials").then((mod) => mod.TestimonialsSection)
);
const Footer = dynamic(() =>
  import("@/sections/Footer").then((mod) => mod.Footer)
);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    if (heroLoaded) {
      setIsLoading(false);
    }
  }, [heroLoaded]);

  const handleHeroLoadComplete = () => {
    console.log("Hero load complete callback triggered"); // 调试日志
    setHeroLoaded(true);
  };

  return (
    <div className="w-full relative">
      <Header />
      <main className="relative">
        <HeroSection onLoadComplete={handleHeroLoadComplete} />
        {!heroLoaded && <Loader />}
        <DescriptionSection />
        <Services />
        <CheckList />
        {/* <ProjectsSection /> */}
        <WhyUs />
        <TestimonialsSection />
        <Footer />
      </main>
    </div>
  );
}
