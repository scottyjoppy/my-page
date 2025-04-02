import GridSection from "@/components/GridSection";
import { ReactNode } from "react";

function RootLayout({ children }: { children: ReactNode }) {
  return <GridSection colsClass="grid-cols-3">{children}</GridSection>;
}

export default RootLayout;
