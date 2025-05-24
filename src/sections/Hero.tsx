"use client";

import Image from "next/image";
import backgroundImage from "@/assets/images/heroBg.webp";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect, FC } from "react";
import PhoneIcon from "@/assets/icons/phone_calling.svg";
import EmailIcon from "@/assets/icons/email.svg";
// import LocationIcon from "@/assets/icons/location.svg";
import { Modal } from "@/components/Modal";
import ContactForm from "@/components/ContactForm";
import { SocialLinks } from "@/components/SocialLinks";

interface HeroSectionProps {
  onLoadComplete?: () => void;
}

interface ContactInfo {
  title: string;
  phone: string;
  email: string;
  address: string;
  button: string;
}

interface HeroTranslations {
  title: string;
  subtitle: string;
  contact: ContactInfo;
}

export const HeroSection: FC<HeroSectionProps> = ({ onLoadComplete }) => {
  const { t } = useLanguage();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [clientHeight, setClientHeight] = useState(0);

  const getTranslatedString = (path: string): string => {
    const value = t(path);
    return typeof value === "string" ? value : "";
  };

  const translations: HeroTranslations = {
    title: getTranslatedString("hero.title"),
    subtitle: getTranslatedString("hero.subtitle"),
    contact: {
      title: getTranslatedString("hero.contact.title"),
      phone: getTranslatedString("hero.contact.phone"),
      email: getTranslatedString("hero.contact.email"),
      address: getTranslatedString("hero.contact.address"),
      button: getTranslatedString("hero.contact.button"),
    },
  };

  useEffect(() => {
    const updateHeight = () => {
      setClientHeight(window.innerHeight);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  useEffect(() => {
    const checkScreenHeight = () => {
      setIsSmallScreen(clientHeight < 807);
    };

    checkScreenHeight();
    window.addEventListener("resize", checkScreenHeight);

    return () => {
      window.removeEventListener("resize", checkScreenHeight);
    };
  }, [clientHeight]);

  useEffect(() => {
    if (imageLoaded && onLoadComplete) {
      onLoadComplete();
    }
  }, [imageLoaded, onLoadComplete]);

  const handleExploreWork = () => {
    const sections = document.getElementsByTagName("section");
    if (sections.length > 1) {
      const top = sections[1].offsetTop - 100;
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  const handleContactClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const contactBlock = (
    <div className="relative rounded-lg bg-white mx-8 p-8 md:p-12 lg:p-16 shadow-md">
      <div className="absolute top-0 left-0 w-8 h-8 bg-green-500 rounded-full -ml-4 -mt-4"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 bg-green-500 rounded-full -mr-4 -mb-4"></div>
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 my-4 text-center">
        {translations.contact.title}
      </h2>
      <div className="flex flex-col my-4 gap-2 sm:my-6 sm:gap-8">
        <div className="contact-item lg:text-lg">
          <PhoneIcon className="w-5 h-5" />
          <a href={`tel:${translations.contact.phone}`}>
            {translations.contact.phone}
          </a>
        </div>
        <div className="contact-item lg:text-lg">
          <div className="w-5 h-5 flex flex-col justify-center items-center">
            <EmailIcon className="w-4 h-4" />
          </div>
          <a href={`mailto:${translations.contact.email}`}>
            {translations.contact.email}
          </a>
        </div>
        {/* <div className="contact-item mb-6 lg:text-lg">
          <LocationIcon className="w-5 h-5" />
          <address>
            {translations.contact.address.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                {index === 0 && <br />}
              </span>
            ))}
          </address>
        </div> */}
      </div>

      <div className="flex justify-center my-12">
        <button className="btn-secondary" onClick={handleContactClick}>
          {translations.contact.button}
        </button>
      </div>
          <SocialLinks />

    </div>
  );

  return (
    <>
      <div className="relative">
        <section className="relative h-[100vh] w-full flex justify-center items-center overflow-visible bg-white">
          <Image
            className="z-0 w-full h-full object-cover"
            src={backgroundImage}
            alt="Hero Background"
            onLoad={() => setImageLoaded(true)}
            fill
            priority
          />

          <div className="flex flex-col md:flex-row gap-16 md:gap-36 md:justify-center h-full pt-32 md:pt-48 lg:pt-60 box-border relative z-5">
            <div className="relative group py-6 sm:py-6 w-full max-w-[480px] min-w-[320px] h-44 md:h-52">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/20 py-6 to-primary/30 backdrop-blur-xl rounded-xl md:scale-105 shadow-2xl"></div>
              <div className="relative p-8 md:p-10 rounded-3xl py-6 text-primary font-semibold h-full flex flex-col justify-center">
                <p className="text-3xl md:text-4xl mb-3 tracking-tight leading-tight">
                  {translations.title}
                </p>
                <p className="text-xl md:text-xl italic font-light">
                  {translations.subtitle}
                </p>
              </div>
            </div>
            <div>{contactBlock}</div>
          </div>
        </section>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={translations.contact.button}
      >
        <ContactForm />
      </Modal>
    </>
  );
};
