"use client";

import Logo from "@/assets/icons/LogoIcon.svg";
import { useLanguage } from "@/contexts/LanguageContext";
import MoveImage from "@/assets/images/move1.jpeg";
import { MoveItems } from "@/components/MoveItems";
import { twMerge } from "tailwind-merge";
import { Modal } from "@/components/Modal";
import { useState, useMemo } from "react";
import {
  createCarouselImages,
  getTotalImages,
  isValidImageIndex,
} from "@/config/carouselImages";

// 使用配置文件创建轮播图片数组
const carouselImages = createCarouselImages();

const ImageItems = ({
  images,
  className,
  direction = "left",
}: {
  images: React.ReactNode[];
  className?: string;
  direction?: "left" | "right";
}) => {
  return (
    <div className={twMerge("flex mask-layer", className)}>
      <MoveItems
        className={twMerge(
          "flex flex-none py-0.5 gap-6 pr-6 [animation-duration:30s] hover:[animation-play-state:paused]"
        )}
        direction={direction}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="inline-flex items-center justify-center py-2 px-3 outline outline-2 outline-white/10 rounded-lg cursor-pointer"
          >
            {image}
          </div>
        ))}
      </MoveItems>
    </div>
  );
};

export const DescriptionSection = () => {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);

  // 获取图片数量信息
  const totalImages = getTotalImages();
  const currentImageNumber = currentCarouselIndex + 1;

  // Get paragraphs array and ensure it's an array of strings
  const paragraphsValue = t("description.paragraphs");
  const paragraphs: string[] = Array.isArray(paragraphsValue)
    ? paragraphsValue.map((p) => (typeof p === "string" ? p : ""))
    : [];

  if (paragraphs.length === 0) {
    console.error("Failed to load description paragraphs");
  }

  // Get MoveItems content from language files
  const moveItemsTitle = t("MoveItems.title");
  const moveItemsDescription = t("MoveItems.description");
  const moveItemsDotpoints = t("MoveItems.dotpoints");

  const title =
    typeof moveItemsTitle === "string" ? moveItemsTitle : "Image Details";
  const description = Array.isArray(moveItemsDescription)
    ? moveItemsDescription
    : [];
  const dotpoints = Array.isArray(moveItemsDotpoints) ? moveItemsDotpoints : [];

  // Create array of 5 MoveImage instances
  const moveImages = Array.from({ length: 5 }, (_, index) => (
    <img
      key={index}
      src={MoveImage.src}
      alt={`Move Image ${index + 1}`}
      className="w-36 h-36 md:w-48 md:h-48 object-contain rounded cursor-pointer hover:opacity-80 transition-opacity"
      onClick={() => {
        setSelectedImageIndex(index);
        setIsModalOpen(true);
      }}
    />
  ));

  // Create infinite loop sequence: [1,2,3,4,5,1,2,3,4,5]
  const infiniteImages = [
    ...moveImages, // First set: [1,2,3,4,5]
    ...moveImages, // Second set: [1,2,3,4,5]
  ];

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    setCurrentCarouselIndex((prev) =>
      prev === totalImages - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentCarouselIndex((prev) =>
      prev === 0 ? totalImages - 1 : prev - 1
    );
  };

  // 确保有图片时才显示轮播
  const hasImages = totalImages > 0;

  // 验证当前索引是否有效
  const isValidIndex = isValidImageIndex(currentCarouselIndex);

  return (
    <>
      <div className="hidden md:block bg-background p-2 px-8 border-bottom-left-radius-lg border-bottom-right-radius-lg">
        <ImageItems images={infiniteImages} direction="left" />
      </div>
      <section id="description-section" className="container">
        <div className="flex justify-center">
          <Logo className="size-36 text-primary-600" />
        </div>

        <div className="max-w-3xl mx-auto space-y-6 mt-8">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-gray-700 text-base md:text-lg leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={title}
        width="max-w-3xl"
      >
        <div className="flex flex-col items-center max-h-[80vh]">
          {/* 轮播图容器 */}
          {hasImages && isValidIndex ? (
            <div className="flex items-center gap-4 w-full max-w-3xl">
              {/* 导航按钮 - 左侧 */}
              <button
                onClick={prevImage}
                className="flex-shrink-0 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-200"
                aria-label="上一张图片"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* 图片容器 */}
              <div className="relative flex-1">
                <img
                  src={carouselImages[currentCarouselIndex].src}
                  alt={carouselImages[currentCarouselIndex].alt}
                  className="w-full h-auto object-contain rounded-lg"
                />

                {/* 图片计数器 */}
                <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                  {currentImageNumber} / {totalImages}
                </div>
              </div>

              {/* 导航按钮 - 右侧 */}
              <button
                onClick={nextImage}
                className="flex-shrink-0 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-200"
                aria-label="下一张图片"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          ) : (
            <div className="text-center text-gray-500 py-8">
              {!hasImages ? "暂无图片可显示" : "图片加载失败"}
            </div>
          )}

          {/* Description paragraphs */}
          <div className="space-y-4 w-full py-6">
            {Array.isArray(description) &&
              description.map((desc, index) => (
                <p
                  key={index}
                  className="text-gray-600 text-center leading-relaxed"
                >
                  {desc}
                </p>
              ))}
          </div>
        </div>
      </Modal>
    </>
  );
};
