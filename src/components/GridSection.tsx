import clsx from "clsx";
import React from "react";

interface GridProps {
  children?: React.ReactNode;
  cols?: {
    default?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: string;
  className?: string;
}

const GridSection = ({
  children,
  cols = { default: 1, sm: 2, lg: 3 },
  gap = "gap-2",
  className,
}: GridProps) => {
  // Create grid classes directly in the className prop
  return (
    <section className="w-full border-b-8 border-primary bg-primary mix-blend-multiply">
      <div
        className={clsx(
          "container mx-auto px-4 grid",
          `grid-cols-${cols.default}`,
          cols.sm && `sm:grid-cols-${cols.sm}`,
          cols.md && `md:grid-cols-${cols.md}`,
          cols.lg && `lg:grid-cols-${cols.lg}`,
          cols.xl && `xl:grid-cols-${cols.xl}`,
          gap,
          "font-inter",
          className
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default GridSection;
