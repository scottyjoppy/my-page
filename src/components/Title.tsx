import React from "react";

const Title = ({ children }: { children: React.ReactNode }) => {
  return <h1 className="title-css lg:title-css">{children}</h1>;
};

export default Title;
