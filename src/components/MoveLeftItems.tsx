import { twMerge } from "tailwind-merge";
import { Fragment } from "react";

export const MoveLeftItems = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={twMerge("animate-move-left", className)}>
      {[...new Array(2)].fill(0).map((_, index) => (
        <Fragment key={index}>{children}</Fragment>
      ))}
    </div>
  );
};
