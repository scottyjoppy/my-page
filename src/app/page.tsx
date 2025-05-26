"use client";

import IsometricMap from "@/components/components-2/IsometricMap";
import GridSection from "@/components/GridSection";
import GridSectionCenterFull from "@/components/GridSectionCenterFull";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [activeIsl, setActiveIsl] = useState<string | null>(null);
  const handleActiveIsl = (value: string | null) => {
    setActiveIsl(value);
    console.log(value)
  };

  return (
    <>
      <section className="fixed z-0 w-full h-full overflow-hidden bg-[#143D60]">
        <div className="relative w-full h-full flex justify-center items-center transition-all duration-[1s] origin-center">
          <IsometricMap onActiveIsl={handleActiveIsl} />
        </div>
      </section>
      <section className="h-screen"></section>
      <section className="flex flex-col justify-center items-center overflow-hidden relative"></section>
      <GridSection cols={{ lg: 2 }}>
        <GridSectionCenterFull>
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl">Projects</h2>
            <div className="flex gap-3 items-center">
              <p>Current: </p>
              <Link href="https://github.com/scottyjoppy/my-page">
                <Button className="hover:cursor-pointer">My-Page</Button>
              </Link>
            </div>
            <div className="flex gap-3">
              <p>Desc: </p>
              <p>A portfolio to display projects, blogs, and more.</p>
            </div>
          </div>
        </GridSectionCenterFull>
        <GridSectionCenterFull className="flex flex-col">
          {/* {postPreview} */}
          <Button className="hover:cursor-pointer">
            <Link href="/blog">Go To Blogs</Link>
          </Button>
        </GridSectionCenterFull>
        {/* <GridSectionCenterFull>
          <Button className="hover:cursor-pointer">
            <Link href="/about">About</Link>
          </Button>
        </GridSectionCenterFull> */}
      </GridSection>
      <section className="h-screen"></section>
    </>
  );
}
