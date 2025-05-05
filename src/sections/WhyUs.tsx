import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import CheckCircleIcon from "@/assets/icons/star.svg";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useLanguage } from "@/contexts/LanguageContext";

interface Feature {
  title: string;
  description: string;
}

export const WhyUsSection = () => {
  const isMobile = useIsMobile();
  const { t } = useLanguage();

  const getTranslatedString = (path: string): string => {
    const value = t(path);
    return typeof value === "string" ? value : "";
  };

  const featuresData = t("whyUs.features");
  if (!Array.isArray(featuresData)) {
    console.error("Features is not an array");
    return null;
  }

  const features = featuresData
    .map((item) => {
      if (
        typeof item === "object" &&
        item !== null &&
        typeof (item as any).title === "string" &&
        typeof (item as any).description === "string"
      ) {
        return item as Feature;
      }
      console.error("Invalid feature item:", item);
      return null;
    })
    .filter((item): item is Feature => item !== null);

  if (features.length === 0) {
    console.error("No valid features found");
    return null;
  }

  return (
    <section className="py-8 md:py-16 bg-background">
      <div className="container">
        <SectionHeader
          title={getTranslatedString("whyUs.header.title")}
          eyebrow={getTranslatedString("whyUs.header.eyebrow")}
          description={getTranslatedString("whyUs.header.description")}
        />
        <p className="text-gray-700 text-base leading-relaxed mt-8">
          {getTranslatedString("whyUs.introduction")}
        </p>
        {!isMobile && (
          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="p-6 md:p-8 transition-transform duration-300 flex flex-col items-center text-center"
              >
                <div className="mb-6">
                  <CheckCircleIcon className="size-12 text-primary-600" />
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
