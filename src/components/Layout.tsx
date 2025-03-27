import { ReactNode } from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
    </>
  );
};

export default Layout;
