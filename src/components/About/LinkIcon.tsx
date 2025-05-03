import Link from "next/link";

export const LinkIcon = ({
  component,
  title,
  link,
}: {
  component: React.ElementType;
  title: string;
  link: string;
}) => {
  const Component = component;
  return (
    <>
      <Component className="size-5 fill-white group-hover:translate-y-1 group-hover:scale-110 transition-all duration-500" />
    </>
  );
};
