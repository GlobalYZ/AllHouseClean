export const LinkIcon = ({
  component,
  title,
}: {
  component: React.ElementType;
  title: string;
}) => {
  const Component = component;
  return (
    <>
      <button className="group relative rounded-full p-2 shadow-sm inline-flex flex-col items-center gap-2">
        <Component className="size-5 fill-white group-hover:translate-y-1 group-hover:scale-110 transition-all duration-500" />
        <span className="absolute text-sm opacity-0 group-hover:opacity-100 group-hover:text-white/60 group-hover:text-sm group-hover:-translate-y-5 duration-500">
          {title}
        </span>
      </button>
    </>
  );
};
