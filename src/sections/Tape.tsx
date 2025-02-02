import StarIcon from "@/assets/icons/star.svg";

const words = [
  "Performant",
  "Accessibile",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Maintainable",
  "SEO Optimized",
  "Reliable",
];

export const TapeSection = () => {
  return (
    <section className="py-32 lg:py-48 md:py-40 overflow-x-clip">
      <div className="gradient-bg -rotate-6 -mx-1">
        <div
          className="flex h-10 items-center gap-4"
          style={{
            maskImage:
              "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0))",
          }}
        >
          {words.map((word) => (
            <div key={word} className="inline-flex items-center gap-4">
              <span className="text-gray-900 uppercase font-extrabold text-sm text-nowrap">
                {word}
              </span>
              <StarIcon className="size-6 text-gray-900 -rotate-12" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
