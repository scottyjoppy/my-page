import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    // <ThemeProvider
    //   attribute="class"
    //   defaultTheme="system"
    //   enableSystem
    //   disableTransitionOnChange
    // >
    <>
      <Navbar />
      {children}
      <Footer />
    </>
    // </ThemeProvider>
  );
}

export default Layout;
