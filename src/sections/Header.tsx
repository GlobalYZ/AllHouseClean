"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import Image from "next/image";
import Logo from "@/assets/icons/Logo.svg";
const Nav = ({
  isOpen,
  onClose,
  isMobile,
}: {
  isOpen: boolean;
  onClose: () => void;
  isMobile: boolean;
}) => {
  const { t } = useLanguage();

  const getTranslatedString = (path: string): string => {
    const value = t(path);
    return typeof value === "string" ? value : "";
  };

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionTop - 80,
        behavior: "smooth",
      });
    }
    onClose();
  };

  return (
    <>
      {isMobile && (
        <div
          className={`fixed pt-20 inset-0 h-screen bg-background/90 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={onClose}
        />
      )}
      <nav
        className={`${
          isMobile
            ? `fixed top-20 right-0 w-48 h-screen bg-background flex flex-col items-center gap-1 transition-transform duration-300 ${
                isOpen ? "translate-x-0" : "translate-x-full"
              }`
            : "flex static w-auto h-auto bg-transparent flex-row items-center gap-4"
        }`}
      >
        <a
          href="#description"
          className={`nav-item text-nowrap ${
            isMobile ? "w-full text-center p-4" : "w-auto text-left p-0"
          }`}
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection("description-section");
            window.history.pushState(null, "", "#description");
          }}
        >
          {getTranslatedString("nav.description")}
        </a>
        <a
          href="#checklist"
          className={`nav-item text-nowrap ${
            isMobile ? "w-full text-center p-4" : "w-auto text-left p-0"
          }`}
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection("checklist-section");
            window.history.pushState(null, "", "#checklist");
          }}
        >
          {getTranslatedString("nav.checklist")}
        </a>
        <a
          href="#projects"
          className={`nav-item text-nowrap ${
            isMobile ? "w-full text-center p-4" : "w-auto text-left p-0"
          }`}
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection("projects-section");
            window.history.pushState(null, "", "#projects");
          }}
        >
          {getTranslatedString("nav.projects")}
        </a>
        <a
          href="#testimonials"
          className={`nav-item text-nowrap ${
            isMobile ? "w-full text-center p-4" : "w-auto text-left p-0"
          }`}
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection("testimonials-section");
            window.history.pushState(null, "", "#testimonials");
          }}
        >
          {getTranslatedString("nav.testimonial")}
        </a>
        <div className="flex justify-center md:hidden">
          <LanguageSwitch />
        </div>
      </nav>
    </>
  );
};

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <header className="fixed z-10 w-screen flex h-20 px-4 lg:px-6 justify-between items-center bg-background shadow-md">
      <div className="flex items-center gap-8">
        <div className="w-10 md:w-28 md:h-10 text-primary">
          <Logo />
        </div>

        <Nav
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          isMobile={isMobile}
        />
      </div>
      {isMobile ? (
        <button
          className="p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between relative">
            <span
              className={`h-0.5 w-full bg-primary-600 transition-all duration-300 origin-center ${
                isMenuOpen ? "rotate-45 translate-y-[9px]" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-primary-600 transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-primary-600 transition-all duration-300 origin-center ${
                isMenuOpen ? "-rotate-45 -translate-y-[9px]" : ""
              }`}
            />
          </div>
        </button>
      ) : (
        <LanguageSwitch />
      )}
    </header>
  );
};
