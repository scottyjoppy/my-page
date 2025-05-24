"use client";

import FigmaIsometric from "@/components/components-2/FigmaIsometric";
import GridSection from "@/components/GridSection";
import GridSectionCenterFull from "@/components/GridSectionCenterFull";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  // const postMetadata = getPostMetadata();
  // const postPreview = (
  //   <PostPreview key={postMetadata[0].slug} {...postMetadata[0]} />
  // );

  const [zoomClass, setZoomClass] = useState("");
  const handleIslChange = (isl: string | null): void => {
    // switch (isl) {
    //   case "isl-w":
    //     setZoomClass("scale-[700%] translate-x-[1600px] translate-y-[1000px]");
    //     break;
    //   case "isl-s":
    //     setZoomClass("scale-[700%] translate-x-[1900px] translate-y-[1000px]");
    //     break;
    //   default:
    //     setZoomClass("");
    //     break;
    // }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && zoomClass !== "") {
        handleIslChange("");
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <>
      {/* <div className="background-grid w-screen h-screen z-10 absolute top-0"></div> */}
      <section className="fixed z-0 w-full h-full overflow-hidden bg-[#143D60]">
        <div
          className={`relative w-full h-full flex justify-center items-center transition-all duration-[1s] origin-center ${zoomClass}`}
        >
          <FigmaIsometric onIslChange={handleIslChange} />
        </div>
      </section>
      <section className="h-screen"></section>
      <section className="flex flex-col justify-center items-center overflow-hidden relative">
        {/* <nav className="left-2/3 top-1/3 ">
          <NavShape />
          </nav> */}
        {/* <h1 className="text-7xl font-bold uppercase z-1">Welcome</h1>
        <div className="hover:scale-99 transition-transform w-[50vh] h-[50vh] min-w-[300px] max-w-[400px] min-h-[300px] max-h-[400px] overflow-hidden relative rounded-2xl drop-shadow-2xl">
        <Image
        className="object-cover"
        objectPosition="-80px center"
        src="/images/alex-image.jpg"
        alt="A picture of alex"
        fill
        />
        </div>
        <p className="text-4xl uppercase font-bold">I'm Alexander Delisle</p> */}

        {/* <div className="absolute bottom-0 w-full h-full flex translate-y-10 overflow-hidden ">
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L645 368.999V640H1V1Z" fill="white" />
          </svg>
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M645 1L1 368.999V640H645V1Z" fill="white" />
          </svg>
        </div> */}
      </section>
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
