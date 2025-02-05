import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import { Card } from "@/components/Card";

export const ContactSection = () => {
  return (
    <Card className="container gradient-bg text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left">
      <div className="flex flex-col md:flex-row gap-8 md:gap-13 items-center">
        <div className="md:flex-1">
          <h2 className="font-serif text-2xl md:text-3xl">
            Let&apos;s create something amazing together
          </h2>
          <p className="text-sm md:text-base mt-4">
            Feel free to reach out anytime. I&apos;d love to discuss how I can
            contribute to your team&apos;s success
          </p>
        </div>
        <div className="flex items-center justify-center px-16">
          <button className="text-white bg-gray-900 inline-flex items-center gap-2 h-12 px-6 rounded-xl mt-4 w-max border border-gray-900 hover:bg-black hover:scale-105 transition-all duration-300">
            <span className="font-medium">Contact me</span>
            <ArrowUpRight className="size-4" />
          </button>
        </div>
      </div>
    </Card>
  );
};
