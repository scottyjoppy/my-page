import { ThemeProvider } from "next-themes";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
          <Navbar />
          {children}
          <Footer/>
    </ThemeProvider>
  );
}

export default Layout;
