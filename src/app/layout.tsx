import Layout from "@/components/Layout";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import "./globals.css";
import "./animation.css";
import { ReactLenis } from "lenis/react"

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
      <body className={`antialiased font-inter`}>
        <SpeedInsights />
        <Analytics />
        <ReactLenis root>
          <Layout>{children}</Layout>
        </ReactLenis>
      </body>
    </html>
  );
}
