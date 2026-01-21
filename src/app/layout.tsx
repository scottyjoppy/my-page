import "@/app/main.css";
import BodyController from "@/components/BodyController";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/nav/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alex's Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SpeedInsights />
        <Analytics />
        <Navbar />
        <BodyController>
          <div className="bg-inherit min-h-[97vh]">{children}</div>
        </BodyController>
        <Footer />
      </body>
    </html>
  );
}
