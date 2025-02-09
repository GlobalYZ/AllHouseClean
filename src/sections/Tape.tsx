"use client";

import StarIcon from "@/assets/icons/star.svg";
import { MoveItems } from "@/components/MoveItems";
import { useLanguage } from "@/contexts/LanguageContext";

export const TapeSection = () => {
  const { t } = useLanguage();
  const words = t("tape")
    .split(", ")
    .filter((word) => word.trim() !== "");

  return (
    <div className="py-32 lg:py-48 md:py-40 overflow-x-clip">
      <div className="gradient-bg -rotate-6 -mx-1">
        <div className="mask-layer-tape">
          <MoveItems className="flex h-10 items-center gap-4">
            {words.map((word) => (
              <div key={word} className="inline-flex items-center gap-4">
                <span className="text-gray-900 uppercase font-extrabold text-sm text-nowrap">
                  {word}
                </span>
                <StarIcon className="size-6 text-gray-900 -rotate-12" />
              </div>
            ))}
          </MoveItems>
        </div>
      </div>
    </div>
  );
};
