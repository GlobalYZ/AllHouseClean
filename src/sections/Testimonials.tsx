"use client";

import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
// import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
// import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
// import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { MoveItems } from "@/components/MoveItems";
import { useLanguage } from "@/contexts/LanguageContext";

export const TestimonialsSection = () => {
  const { t } = useLanguage();

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

  return (
    <section className="container">
      <SectionHeader
        title={t("testimonial.title")}
        eyebrow={t("testimonial.top")}
        description={t("testimonial.description")}
      />
      <div className="mt-12 lg:mt-20 flex overflow-x-clip mask-layer py-4">
        <MoveItems className="flex gap-8 flex-none [animation-duration:90s] hover:[animation-play-state:paused]">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="p-6 max-w-xs md:p-8 md:max-w-md hover:scale-105 transition-all duration-300"
            >
              <div className="flex gap-4 items-center">
                <Image
                  className="size-14 rounded-full bg-gray-700"
                  src={testimonial.avatar}
                  alt={testimonial.name}
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-white/40">
                    {testimonial.position}
                  </p>
                </div>
              </div>
              <p className="mt-4 md:mt-6 md:text-base text-sm">
                {testimonial.text}
              </p>
            </Card>
          ))}
        </MoveItems>
      </div>
    </section>
  );
};
