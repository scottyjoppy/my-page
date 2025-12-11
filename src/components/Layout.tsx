import React from "react";
import Footer from "@/components/new-styles/components/footer/Footer";
import Navbar from "@/components/new-styles/components/nav/Navbar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
