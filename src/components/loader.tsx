import { useEffect } from "react";

export const Loader = () => {
  useEffect(() => {
    // Disable scroll when component mounts
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    // Re-enable scroll when component unmounts
    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed z-50 flex items-center justify-center bg-background overflow-hidden">
      <div className="flex flex-row gap-2">
        <div className="w-4 h-4 rounded-full bg-primary animate-bounce"></div>
        <div className="w-4 h-4 rounded-full bg-primary animate-bounce [animation-delay:-.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-primary animate-bounce [animation-delay:-.5s]"></div>
      </div>
    </div>
  );
};
