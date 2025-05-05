"use client";

import Image from "next/image";
import backgroundImage from "@/assets/images/heroBg.webp";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";
import PhoneIcon from "@/assets/icons/phone_calling.svg";
import EmailIcon from "@/assets/icons/email.svg";
import LocationIcon from "@/assets/icons/location.svg";
import { Modal } from "@/components/Modal";
import ContactForm from "@/components/ContactForm";

interface HeroSectionProps {
  onLoadComplete?: () => void;
}

export const HeroSection = ({ onLoadComplete }: HeroSectionProps) => {
  const { t } = useLanguage();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [clientHeight, setClientHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      setClientHeight(window.innerHeight);
    };

    // 初始化设置
    updateHeight();

    // 监听窗口大小变化
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
  }, []);

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

  const handleContactClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const contactBlock = (
    <div className="relative rounded-lg bg-white p-12 md:p-12 lg:p-16 shadow-md">
      <div className="absolute top-0 left-0 w-8 h-8 bg-green-500 rounded-full -ml-4 -mt-4"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 bg-green-500 rounded-full -mr-4 -mb-4"></div>
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 my-4 text-center">
        Connect with us
      </h2>
      <div className="my-6 lg:my-12">
        <div className="contact-item lg:text-lg">
          <PhoneIcon className="w-5 h-5" />
          <a href="tel:(780) 669-4879">(780) 669-4879</a>
        </div>
        <div className="contact-item lg:text-lg">
          <EmailIcon className="w-5 h-5" />
          <a href="mailto:edmonton@maidpro.com">edmonton@maidpro.com</a>
        </div>
        <div className="contact-item mb-6 lg:text-lg">
          <LocationIcon className="w-5 h-5" />
          <address>
            18012 105 Ave NW #101
            <br />
            Edmonton, AB T5S 2P1
          </address>
        </div>
      </div>

      <div className="flex justify-center my-4">
        <button className="btn-secondary" onClick={handleContactClick}>
          Contact Us
        </button>
      </div>
    </div>
  );

  return (
    <>
      <div className="relative">
        <section
          className={`relative h-[100vh] w-full flex justify-center items-center overflow-hidden bg-white`}
        >
          <Image
            className="z-0 w-full h-full object-cover"
            src={backgroundImage}
            alt="Hero Background"
            onLoad={() => setImageLoaded(true)}
            fill
            priority
          />

          <div className="flex flex-col md:flex-row gap-16 md:gap-36 md:justify-center h-full pt-32 md:pt-48 lg:pt-60 px-10 box-border relative z-5">
            <div className="relative group py-6 sm:py-6 w-full max-w-[480px] min-w-[320px] h-44 md:h-52">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/20 py-6 to-primary/30 backdrop-blur-xl rounded-xl md:scale-105 shadow-2xl"></div>
              <div className="relative p-8 md:p-10 rounded-3xl py-6 text-primary font-semibold h-full flex flex-col justify-center">
                <p className="text-3xl md:text-4xl mb-3 tracking-tight leading-tight">
                  Clean living made simple
                </p>
                <p className="text-xl md:text-xl italic font-light">
                  — starting with All House Clean
                </p>
              </div>
            </div>
            <div>{contactBlock}</div>
          </div>
        </section>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title="Contact Us">
        <ContactForm />
      </Modal>
    </>
  );
};
