"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useRef, TouchEvent } from "react";
import { OpenQuote, CloseQuote } from "@/components/QuoteIcons";

export const TestimonialsSection = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const testimonials = [
    {
      name: t("testimonial.clientOne.name"),
      text: t("testimonial.clientOne.text"),
    },
    {
      name: t("testimonial.clientTwo.name"),
      text: t("testimonial.clientTwo.text"),
    },
  ];

  const StarIcon = () => (
    <svg
      className="w-5 h-5 text-yellow-400"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchEndX.current - touchStartX.current;
    const minSwipeDistance = 50;

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
  };

  return (
    <section className="container py-16">
      <SectionHeader
        title={t("testimonial.title")}
        eyebrow={t("testimonial.top")}
        description={t("testimonial.description")}
      />
      <div className="mt-12 lg:mt-20 relative max-w-2xl mx-auto px-4 md:px-16">
        <div
          className="overflow-hidden touch-pan-x"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="w-full flex-shrink-0 p-6 md:p-8"
              >
                <div className="relative bg-white rounded-2xl shadow-[0_4px_24px_0_rgba(0,0,0,0.08)] hover:shadow-[0_4px_32px_0_rgba(0,0,0,0.12)] transition-shadow duration-300 px-8 py-8 md:px-12 md:py-10">
                  <OpenQuote className="absolute -top-6 -left-6 w-20 h-20 text-primary-600/40" />

                  <div className="text-center mb-6">
                    <h4 className="font-bold text-xl md:text-2xl text-gray-900 mb-3">
                      {testimonial.name}
                    </h4>
                    <div className="flex justify-center gap-1">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </div>
                  </div>

                  <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center">
                    {testimonial.text}
                  </p>

                  <CloseQuote className="absolute -bottom-6 -right-6 w-20 h-20 text-primary-600/40" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons - Hidden on Mobile */}
        <button
          onClick={handlePrev}
          className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 bg-white hover:bg-primary-50 shadow-[0_2px_8px_0_rgba(0,0,0,0.12)] hover:shadow-[0_4px_12px_0_rgba(0,0,0,0.15)] rounded-full p-3 transition-all hover:scale-110"
          aria-label="Previous testimonial"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-5 h-5 text-primary-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 bg-white hover:bg-primary-50 shadow-[0_2px_8px_0_rgba(0,0,0,0.12)] hover:shadow-[0_4px_12px_0_rgba(0,0,0,0.15)] rounded-full p-3 transition-all hover:scale-110"
          aria-label="Next testimonial"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-5 h-5 text-primary-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`size-2.5 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-primary-600 scale-125"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
