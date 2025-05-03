import { TechIcon } from "@/components/About/TechIcon";
import { twMerge } from "tailwind-merge";
import { MoveItems } from "@/components/MoveItems";

export const ToolboxItems = ({
  toolboxItems,
  className,
  itemsWrapperClassName,
  direction = "left",
}: {
  toolboxItems: {
    title: string;
    iconType: React.ElementType;
  }[];
  className?: string;
  itemsWrapperClassName?: string;
  direction?: "left" | "right";
}) => {
  return (
    <div className={twMerge("flex mask-layer", className)}>
      <MoveItems
        className={twMerge(
          "flex flex-none py-0.5 gap-6 pr-6 [animation-duration:20s] hover:[animation-play-state:paused]",
          itemsWrapperClassName
        )}
        direction={direction}
      >
        {toolboxItems.map((item) => (
          <div
            key={item.title}
            className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-primary-200 rounded-lg"
          >
            <TechIcon component={item.iconType} />
            <span className="font-semibold text-gray-900">{item.title}</span>
          </div>
        ))}
      </MoveItems>
    </div>
  );
};
