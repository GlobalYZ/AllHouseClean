"use client";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import dynamic from "next/dynamic";
import { Loader } from "@/components/loader";
import { useState, useEffect } from "react";

// Lazy load sections that are below the fold
const ProjectsSection = dynamic(() =>
  import("@/sections/Projects").then((mod) => mod.ProjectsSection)
);
const TapeSection = dynamic(() =>
  import("@/sections/Tape").then((mod) => mod.TapeSection)
);
const TestimonialsSection = dynamic(() =>
  import("@/sections/Testimonials").then((mod) => mod.TestimonialsSection)
);
const AboutSection = dynamic(() =>
  import("@/sections/About").then((mod) => mod.AboutSection)
);
const ContactSection = dynamic(() =>
  import("@/sections/Contact").then((mod) => mod.ContactSection)
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
    <div>
      <Header />
      <HeroSection onLoadComplete={handleHeroLoadComplete} />
      {!heroLoaded && (
        <div className="fixed inset-0 z-10 flex flex-col items-center justify-center bg-black h-screen">
          <Loader />
        </div>
      )}
      <ProjectsSection />
      <TapeSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
