import { useEffect } from "react";

export const useScrollEffect = (
  offset: number,
  callback: (currentPosition: number) => void
) => {
  useEffect(() => {
    const handleScroll = () => {
      const currentPosition =
        window.scrollY || document.documentElement.scrollTop;
      callback(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset, callback]);
};
