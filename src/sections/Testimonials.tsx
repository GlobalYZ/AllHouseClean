"use client";

import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
// import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
// import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
// import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
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
      position: t("testimonial.clientOne.position"),
      text: t("testimonial.clientOne.text"),
      avatar: memojiAvatar1,
    },
    {
      name: t("testimonial.clientTwo.name"),
      position: t("testimonial.clientTwo.position"),
      text: t("testimonial.clientTwo.text"),
      avatar: memojiAvatar3,
    },
  ];

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
    const minSwipeDistance = 50; // 最小滑动距离

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
  };

  return (
    <section className="container">
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
              <Card
                key={testimonial.name}
                className="p-6 w-full flex-shrink-0 md:p-8 bg-transparent shadow-none text-gray-900"
              >
                <div className="relative px-8 py-6 md:px-12 md:py-8">
                  <OpenQuote className="absolute -top-6 -left-6 w-20 h-20 text-primary-600/40" />

                  <div className="flex gap-2 items-center">
                    <Image
                      className="size-14 rounded-full bg-gray-700"
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <div>
                      <p className="font-semibold text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 md:text-base text-sm text-gray-800">
                    {testimonial.text}
                  </p>

                  <CloseQuote className="absolute -bottom-6 -right-6 w-20 h-20 text-primary-600/40" />
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Navigation Buttons - Hidden on Mobile */}
        <button
          onClick={handlePrev}
          className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 bg-white/90 hover:bg-white shadow-[0_2px_8px_0_rgba(0,0,0,0.12)] hover:shadow-[0_4px_12px_0_rgba(0,0,0,0.15)] rounded-full p-2 transition-all hover:scale-110"
          aria-label="Previous testimonial"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-primary-600"
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
          className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 bg-white/90 hover:bg-white shadow-[0_2px_8px_0_rgba(0,0,0,0.12)] hover:shadow-[0_4px_12px_0_rgba(0,0,0,0.15)] rounded-full p-2 transition-all hover:scale-110"
          aria-label="Next testimonial"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-primary-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`size-2 rounded-full transition-all ${
                currentIndex === index
                  ? "bg-primary-600 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
