import { useEffect } from "react";
import debounce from "lodash/debounce";

export const useScrollEffect = (
  offset: number,
  beginSpot: number | undefined,
  endSpot: number | undefined,
  callback: (currentPosition: number) => void
) => {
  useEffect(() => {
    // 检查是否在浏览器环境
    if (typeof window === "undefined") return;

    const handleScroll = debounce(() => {
      const currentPosition =
        window.scrollY || document.documentElement.scrollTop;
      if (
        currentPosition >= beginSpot! - 500 &&
        currentPosition < endSpot! + 400
      ) {
        callback(currentPosition);
      }
    }, 100);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset, callback, beginSpot, endSpot]);
};
