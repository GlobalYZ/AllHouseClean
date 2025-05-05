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

  const handleScrollToSection = (index: number) => {
    const section = document.getElementsByTagName("section")[index];
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: sectionTop - 120,
      behavior: "smooth",
    });
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
            : "hidden md:flex static w-auto h-auto bg-transparent flex-row items-center gap-4"
        }`}
      >
        <a
          href="#home"
          className={`nav-item text-nowrap ${
            isMobile ? "w-full text-center p-4" : "w-auto text-left p-0"
          }`}
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection(0);
            window.history.pushState(null, "", "#home");
          }}
        >
          {t("home")}
        </a>
        <a
          href="#services"
          className={`nav-item text-nowrap ${
            isMobile ? "w-full text-center p-4" : "w-auto text-left p-0"
          }`}
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection(1);
            window.history.pushState(null, "", "#services");
          }}
        >
          {t("services")}
        </a>
        <a
          href="#projects"
          className={`nav-item text-nowrap ${
            isMobile ? "w-full text-center p-4" : "w-auto text-left p-0"
          }`}
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection(3);
            window.history.pushState(null, "", "#projects");
          }}
        >
          {t("projects")}
        </a>
        <a
          href="#testimonials"
          className={`nav-item text-nowrap ${
            isMobile ? "w-full text-center p-4" : "w-auto text-left p-0"
          }`}
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection(4);
            window.history.pushState(null, "", "#testimonials");
          }}
        >
          {t("testimonials")}
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
    <div className="fixed z-10 w-screen flex h-20 px-4 lg:px-6 justify-between items-center bg-background shadow-md">
      <div className="flex items-center md:gap-8">
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
    </div>
  );
};
