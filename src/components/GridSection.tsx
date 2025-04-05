import clsx from "clsx";
import React from "react";

interface GridProps {
  children?: React.ReactNode;
  colsClass?: string;
}

const GridSection = ({ children, colsClass = "grid-cols-3" }: GridProps) => {
  return (
    <div
      className={clsx(
        "gap-2 md:grid auto-rows-[minmax(4rem,12rem)] lg:[&>*]:p-1 [&>*]:p-10 border-b-8 md:[&>*]:border-b-0 md:[&>*]:border-transparent border-primary [&>*]:w-full font-inter md:bg-foreground",
        colsClass
      )}
    >
      {children}
    </div>
  );
};

export default GridSection;
