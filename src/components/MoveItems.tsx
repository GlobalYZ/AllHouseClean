import { twMerge } from "tailwind-merge";
import { Fragment } from "react";

export const MoveItems = ({
  children,
  className,
  direction = "left",
}: {
  children: React.ReactNode;
  className?: string;
  direction?: "left" | "right";
}) => {
  return (
    <div
      className={twMerge(
        direction === "left" ? "animate-move-left" : "animate-move-right",
        className
      )}
    >
      {[...new Array(2)].fill(0).map((_, index) => (
        <Fragment key={index}>{children}</Fragment>
      ))}
    </div>
  );
};
