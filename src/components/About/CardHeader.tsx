import StarIcon from "@/assets/icons/star.svg";

export const CardHeader = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div className={className}>
      <div className="inline-flex items-center gap-2">
        <StarIcon className="size-9 text-emerald-300" />
        <h3 className="text-3xl font-serif">{title}</h3>
      </div>
      <p className="text-sm text-white/60 mt-2 md:mt-3 max-h-36 overflow-y-scroll pr-1 custom-scroll-bar">
        {description}
      </p>
    </div>
  );
};
