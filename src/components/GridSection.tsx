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
        "lg:grid grid-rows-[repeat(3,minmax(4rem,12rem))] lg:[&>*]:p-1 [&>*]:p-10 [&>*]:border-b-7 [&>*]:border-primary [&>*]:w-full font-inter",
        colsClass
      )}
    >
      {children}
    </div>
  );
};

export default GridSection;
