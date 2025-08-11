import React from "react";

type SectionProps = React.PropsWithChildren<{
  snap?: boolean;
  className?: string;
  id?: string;
}>;

const Section: React.FC<SectionProps> = ({ snap = false, children, className = "", id }) => {
  const snapClasses = "bg-black min-h-screen max-h-screen w-full overflow-hidden snap-child h-screen";

  return (
    <section
      id={id}
      className={`${snap ? snapClasses : ""} ${className}`.trim()}
      data-snap={snap ? "true" : undefined}
    >
      {children}
    </section>
  );
};

export default Section;
