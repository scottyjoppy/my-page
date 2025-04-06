import clsx from "clsx";
import React from "react";

interface GridProps {
  children?: React.ReactNode;
  colSpan?: {
    default?: number | "full";
    sm?: number | "full";
    md?: number | "full";
    lg?: number | "full";
    xl?: number | "full";
  };
  className?: string;
  minHeight?: string;
}

const GridSectionCenterFull = ({
  children,
  colSpan = { default: 1 },
  className,
  minHeight = "min-h-[300px]",
}: GridProps) => {
  const getColSpan = () => {
    return [
      colSpan.default && `col-span-${colSpan.default}`,
      colSpan.sm && `sm:col-span-${colSpan.sm}`,
      colSpan.md && `md:col-span-${colSpan.md}`,
      colSpan.lg && `lg:col-span-${colSpan.lg}`,
      colSpan.xl && `xl:col-span-${colSpan.xl}`,
    ]
      .filter(Boolean)
      .join(" ");
  };

  return (
    <div
      className={clsx(
        "w-full h-full",
        "flex items-center justify-center",
        "rounded-sm bg-background",
        minHeight,
        getColSpan(),
        className
      )}
    >
      {children}
    </div>
  );
};

export default GridSectionCenterFull;
