import clsx from "clsx";
import React from "react";

interface GridTitleProps {
  children: React.ReactNode;
  className?: string;
}

const GridTitleSection = ({ children, className }: GridTitleProps) => {
  return (
    <section
      className={clsx(
        "border-b-8 border-primary bg-background",
        "col-span-full",
        "lg:grid auto-rows-[minmax(4rem,12rem)]",
        "lg:p-1 p-10 mix-blend-multiply",
        className
      )}
    >
      <div className="min-h-[200px] row-span-2 flex flex-col items-center justify-center container mx-auto">
        <div className="items-start">{children}</div>
      </div>
    </section>
  );
};

export default GridTitleSection;
