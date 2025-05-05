"use client";

import { SectionHeader } from "@/components/SectionHeader";
import Logo from "@/assets/icons/LogoIcon.svg";

export const DescriptionSection = () => {
  const paragraphs = [
    "作为一家立足于埃德蒙顿的综合住宅清洁服务公司，我们用心帮助每一位需要我们的顾客，耐心细致的客户服务、可靠放心的规范化流程、无惧返工的清洁效果承诺，都让我们一步一步在好口碑之中走得更远。",
    "放心把您的清洁任务交给我们，我们会用专业的技术和工具，让您家中的每一个角落都得到充分关注，还您一个洁净的家。",
    "感谢每一位长期支持我们的客户、为我们介绍新朋友的客户、用暖心好评鼓励我们的客户，我们永远相信，质量和口碑才是最长远的，我们有信心成为最值得您信赖的选择。",
  ];

  return (
    <section className="container py-8 md:py-16">
      <div className="flex justify-center">
        <Logo className="size-16 md:size-36 text-primary-600" />
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
  );
};
