import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import CheckCircleIcon from "@/assets/icons/star.svg";
import { useIsMobile } from "@/hooks/useIsMobile";

const features = [
  {
    title: "专业",
    description: "针对不同的清洁区域和材质，我们有足够的知识储备和技术。",
    icon: CheckCircleIcon,
  },
  {
    title: "可靠",
    description: "保证清洁效果，如有不达标处免费返工。",
    icon: CheckCircleIcon,
  },
  {
    title: "安全",
    description:
      "使用的清洁工具和清洁剂均来自Home Depot，高效可靠，对生物无害。",
    icon: CheckCircleIcon,
  },
];

export const WhyUsSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-8 md:py-16 bg-background">
      <div className="container">
        <SectionHeader
          title="Why Choose Us"
          eyebrow="我们的优势"
          description=""
        />
        <p className="text-gray-700 text-base leading-relaxed mt-8">
          我们是扎根于埃德蒙顿的清洁团队，专业服务本地客户。我们真心热爱清洁事业，不断学习、不断成长，以最诚恳的态度完成每一次服务，无论是日常清洁、深度清洁还是退租清洁，我们都会认真面对，用心服务好每一位客户。
        </p>
        {!isMobile && (
          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="p-6 md:p-8 transition-transform duration-300 flex flex-col items-center text-center"
              >
                <div className="mb-6">
                  <feature.icon className="size-12 text-primary-600" />
                </div>
                <h3 className="text-2xl font-serif text-primary-600 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
