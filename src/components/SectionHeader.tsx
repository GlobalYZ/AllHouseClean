export const SectionHeader = ({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="gradient-text">{eyebrow}</p>
      </div>

      <h2 className="text-3xl text-center font-serif mt-6 md:text-5xl">
        {title}
      </h2>
      <p className="text-center md:text-lg text-white/60 mt-4 max-w-md mx-auto lg:text-xl">
        {description}
      </p>
    </>
  );
};
