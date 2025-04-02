import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Alex's Blog Page",
};

function RootLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export default RootLayout;
