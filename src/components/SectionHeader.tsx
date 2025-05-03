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
      <h2 className="text-3xl text-center font-serif mt-6 md:text-5xl text-primary-600">
        {title}
      </h2>
      <p className="text-center md:text-lg text-gray-900 mt-4 max-w-md mx-auto lg:text-xl">
        {description}
      </p>
    </>
  );
};
