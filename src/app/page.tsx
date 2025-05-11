"use client";

import IsometricShape from "@/components/components-2/IsometricShape";
import GridSection from "@/components/GridSection";
import GridSectionCenterFull from "@/components/GridSectionCenterFull";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // const postMetadata = getPostMetadata();
  // const postPreview = (
  //   <PostPreview key={postMetadata[0].slug} {...postMetadata[0]} />
  // );

  return (
    <>
      <section className="h-[85vh] min-h-[450px] flex flex-col justify-center items-center overflow-none">
        <nav className="absolute right-30 top-[70%]">
          <IsometricShape />
        </nav>
        <h1 className="text-7xl font-bold uppercase z-1">Welcome</h1>
        <div className="hover:scale-99 transition-transform w-[50vh] h-[50vh] min-w-[300px] max-w-[400px] min-h-[300px] max-h-[400px] overflow-hidden relative rounded-2xl drop-shadow-2xl">
          <Image
            className="object-cover"
            objectPosition="-80px center"
            src="/images/alex-image.jpg"
            alt="A picture of alex"
            fill
          />
        </div>
        <p className="text-4xl uppercase font-bold">I'm Alexander Delisle</p>
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
    </>
  );
}
