import { ThemeProvider } from "next-themes";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Texture from "./Texture";

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
      <Footer />
    </ThemeProvider>
  );
}

export default Layout;
