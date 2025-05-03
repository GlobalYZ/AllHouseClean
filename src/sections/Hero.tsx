"use client";

import Image from "next/image";
import backgroundImage from "@/assets/images/heroBg.jpeg";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";
import PhoneIcon from "@/assets/icons/phone_calling.svg";
import EmailIcon from "@/assets/icons/email.svg";
import LocationIcon from "@/assets/icons/location.svg";
import { Modal } from "@/components/Modal";
import ContactForm from "@/components/ContactForm";

const contactBlock = (
  <div className="relative rounded-lg bg-white p-6 md:p-12 shadow-md">
    <div className="absolute top-0 left-0 w-8 h-8 bg-green-500 rounded-full -ml-4 -mt-4"></div>
    <div className="absolute bottom-0 right-0 w-8 h-8 bg-green-500 rounded-full -mr-4 -mb-4"></div>
    <h2 className="text-xl font-semibold text-gray-800 my-4 text-center">
      Connect with us
    </h2>
    <div className="contact-item">
      <PhoneIcon className="w-5 h-5" />
      <a href="tel:(780) 669-4879">(780) 669-4879</a>
    </div>
    <div className="contact-item">
      <EmailIcon className="w-5 h-5" />
      <a href="mailto:edmonton@maidpro.com">edmonton@maidpro.com</a>
    </div>
    <div className="contact-item mb-6">
      <LocationIcon className="w-5 h-5" />
      <address>
        18012 105 Ave NW #101
        <br />
        Edmonton, AB T5S 2P1
      </address>
    </div>
    <div className="flex justify-center mb-4">
      <button className="btn-secondary">Contact Us</button>
    </div>
  </div>
);

interface HeroSectionProps {
  onLoadComplete?: () => void;
}

export const HeroSection = ({ onLoadComplete }: HeroSectionProps) => {
  const { t } = useLanguage();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <div className="relative rounded-lg bg-white p-6 md:p-12 shadow-md">
      <div className="absolute top-0 left-0 w-8 h-8 bg-green-500 rounded-full -ml-4 -mt-4"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 bg-green-500 rounded-full -mr-4 -mb-4"></div>
      <h2 className="text-xl font-semibold text-gray-800 my-4 text-center">
        Connect with us
      </h2>
      <div className="contact-item">
        <PhoneIcon className="w-5 h-5" />
        <a href="tel:(780) 669-4879">(780) 669-4879</a>
      </div>
      <div className="contact-item">
        <EmailIcon className="w-5 h-5" />
        <a href="mailto:edmonton@maidpro.com">edmonton@maidpro.com</a>
      </div>
      <div className="contact-item mb-6">
        <LocationIcon className="w-5 h-5" />
        <address>
          18012 105 Ave NW #101
          <br />
          Edmonton, AB T5S 2P1
        </address>
      </div>
      <div className="flex justify-center mb-4">
        <button className="btn-secondary" onClick={handleContactClick}>
          Contact Us
        </button>
      </div>
    </div>
  );

  return (
    <>
      <div className="relative z-0">
        <section className="p-20 flex justify-center items-center h-screen">
          <div className="absolute z-0 inset-0">
            <Image
              className="w-full h-full object-cover"
              src={backgroundImage}
              alt="Hero Background"
              onLoad={() => setImageLoaded(true)}
              fill
              priority
            />
          </div>

          <div className="flex flex-col md:flex-row gap-16 md:gap-36 md:justify-center mb-8 h-full pt-32 md:pt-48 lg:pt-60">
            <div className="relative group py-4 w-full max-w-[480px] min-w-[320px] h-40">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/20 to-primary/30 backdrop-blur-xl rounded-3xl md:scale-105 shadow-2xl animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
              <div className="relative p-8 md:p-10 rounded-3xl text-primary font-semibold h-full flex flex-col justify-center">
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
