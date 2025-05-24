"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import PhoneIcon from "@/assets/icons/phone_calling.svg";
import EmailIcon from "@/assets/icons/email.svg";
import LocationIcon from "@/assets/icons/location.svg";
import { LanguageSwitch } from "@/components/LanguageSwitch";

export const Footer = () => {
  const { t } = useLanguage();

  const getTranslatedString = (path: string): string => {
    const value = t(path);
    return typeof value === "string" ? value : "";
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-4xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16 px-6">
          {/* Company Info */}
          <div>
            <h3 className="footer-title">
              {getTranslatedString("footer.company.name")}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {getTranslatedString("footer.company.description")}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="footer-title">
              {getTranslatedString("footer.contact.title")}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5 text-gray-400" />
                <a
                  href={`tel:${getTranslatedString("footer.contact.phone")}`}
                  className="text-gray-600 text-sm hover:text-primary-600 transition-colors"
                >
                  {getTranslatedString("footer.contact.phone")}
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-5 h-5 flex items-center justify-center">
                  <EmailIcon className="w-4 h-4 text-gray-400" />
                </div>
                <a
                  href={`mailto:${getTranslatedString("footer.contact.email")}`}
                  className="text-gray-600 text-sm hover:text-primary-600 transition-colors"
                >
                  {getTranslatedString("footer.contact.email")}
                </a>
              </div>
              {/* <div className="flex items-start gap-3">
                <LocationIcon className="w-5 h-5 text-gray-400 mt-0.5" />
                <address className="text-gray-600 text-sm not-italic">
                  {getTranslatedString("footer.contact.address")
                    .split("\n")
                    .map((line, i) => (
                      <span key={i}>
                        {line}
                        {i === 0 && <br />}
                      </span>
                    ))}
                </address>
              </div> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-title">
              {getTranslatedString("footer.quickLinks.title")}
            </h3>
            <nav className="space-y-3">
              <Link
                href="#description"
                className="block text-gray-600 text-sm hover:text-primary-600 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById(
                    "description-section"
                  );
                  if (section) {
                    const sectionTop =
                      section.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({
                      top: sectionTop - 80,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                {getTranslatedString("nav.description")}
              </Link>
              <Link
                href="#checklist"
                className="block text-gray-600 text-sm hover:text-primary-600 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById("checklist-section");
                  if (section) {
                    const sectionTop =
                      section.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({
                      top: sectionTop - 80,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                {getTranslatedString("nav.checklist")}
              </Link>
              <Link
                href="#projects"
                className="block text-gray-600 text-sm hover:text-primary-600 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById("projects-section");
                  if (section) {
                    const sectionTop =
                      section.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({
                      top: sectionTop - 80,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                {getTranslatedString("nav.projects")}
              </Link>
              <Link
                href="#testimonials"
                className="block text-gray-600 text-sm hover:text-primary-600 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById(
                    "testimonials-section"
                  );
                  if (section) {
                    const sectionTop =
                      section.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({
                      top: sectionTop - 80,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                {getTranslatedString("nav.testimonial")}
              </Link>
              <LanguageSwitch />
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 py-8 px-6">
          <p className="text-center text-gray-500 text-sm">
            {getTranslatedString("footer.copyright").replace(
              "{year}",
              new Date().getFullYear().toString()
            )}
          </p>
        </div>
      </div>
    </footer>
  );
};
