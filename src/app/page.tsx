"use client";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Loader } from "@/components/loader";
import { useState, useEffect } from "react";

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
