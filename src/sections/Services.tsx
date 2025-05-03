import { SectionHeader } from "@/components/SectionHeader";
import CleanHandsIcon from "@/assets/icons/clean-hands.svg";
import DeepCleaningIcon from "@/assets/icons/dusting.svg";
import RegularMaintenanceIcon from "@/assets/icons/dusting.svg";

const services = [
  {
    title: "Professional Cleaning",
    description:
      "Expert cleaning services for your home or office, ensuring a spotless environment.",
    icon: CleanHandsIcon,
    link: "#",
  },
  {
    title: "Deep Cleaning",
    description:
      "Thorough cleaning of every corner, including hard-to-reach areas and detailed attention.",
    icon: DeepCleaningIcon,
    link: "#",
  },
  {
    title: "Regular Maintenance",
    description:
      "Scheduled cleaning services to maintain your space in perfect condition.",
    icon: RegularMaintenanceIcon,
    link: "#",
  },
];

export const Services = () => {
  return (
    <section className="py-16 px-4 container mx-auto">
      <SectionHeader
        eyebrow="Our Services"
        title="公司简介"
        description="家洁生活服务提供专业的清洁服务，确保您的家居环境整洁舒适"
      />
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.1)] bg-white md:h-[300px] lg:h-[350px] flex flex-col items-center text-center"
          >
            <div className="mb-4 w-16 h-16 rounded-full bg-gradient-to-br from-primary-50 to-primary-100 flex justify-center items-center">
              <service.icon className="size-8" />
            </div>
            <h3 className="font-semibold font-serif mb-2 gradient-text flex flex-col">
              {service.title.split(" ").map((word, i) => (
                <span key={i}>{word}</span>
              ))}
            </h3>
            <p className="text-black text-sm flex-grow mt-3 leading-snug">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
