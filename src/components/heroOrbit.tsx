import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
export const HeroOrbit = ({
  children,
  size,
  rotation,
  orbitDuration = 100,
  shouldOrbit = false,
  shouldSpin = true,
  spinDuration = 10,
}: PropsWithChildren<{
  size: number;
  rotation: number;
  orbitDuration?: number;
  shouldOrbit?: boolean;
  shouldSpin?: boolean;
  spinDuration?: number;
}>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20">
      <div
        className={twMerge(shouldOrbit ? "animate-spin" : "")}
        style={{ animationDuration: `${orbitDuration}s` }}
      >
        <div
          className="items-start justify-start"
          style={{
            height: `${size}px`,
            width: `${size}px`,
            transform: `rotate(${rotation}deg)`,
          }}
        >
          <div
            className={twMerge(shouldSpin ? "animate-spin" : "", "inline-flex")}
            style={{
              transform: `rotate(${rotation * -1}deg)`,
              animationDuration: `${spinDuration}s`,
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
