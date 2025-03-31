import React from "react";

interface GridProps {
  children?: React.ReactNode;
  colNum?: string;
}

const GridSection = ({ children, colNum = "3" }: GridProps) => {
  return (
    <div
      className={`lg:grid grid-cols-${colNum} grid-rows-[repeat(3,minmax(4rem,12rem))] lg:[&>*]:p-1 [&>*]:p-10 [&>*]:border-b-7 [&>*]:border-primary [&>*]:w-full font-inter`}
    >
      {children}
    </div>
  );
};

export default GridSection;
