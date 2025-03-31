import React from "react";

interface GridProps {
  children?: React.ReactNode;
  colNum?: string;
  className?: string;
}

const GridSectionCenterFull = ({
  children,
  colNum = "full",
  className,
}: GridProps) => {
  return (
    <div
      className={`flex items-center justify-center h-full col-span-${colNum} ${className}`}
    >
      {children}
    </div>
  );
};

export default GridSectionCenterFull;
