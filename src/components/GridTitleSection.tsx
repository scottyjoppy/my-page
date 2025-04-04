import React from "react";

const GridTitleSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-background col-span-full row-span-2 flex flex-col items-center justify-center mx-auto">
      {children}
    </div>
  );
};

export default GridTitleSection;
