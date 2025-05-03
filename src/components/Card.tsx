import grainImage from "@/assets/images/grain.jpg";
import { twMerge } from "tailwind-merge";

export const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <article
      className={twMerge(
        "primary-to-white overflow-hidden rounded-3xl relative z-0 border-2 shadow-xl pb-0",
        className
      )}
    >
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>
      {children}
    </article>
  );
};
