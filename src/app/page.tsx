import GridSection from "@/components/GridSection";
import GridSectionCenterFull from "@/components/GridSectionCenterFull";
import GridTitleSection from "@/components/GridTitleSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import HomePage from "@/components/new-styles/pages/home/HomePage";

export default function Home() {
  return (
    <>
      <HomePage></HomePage>
      <GridTitleSection>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          <div className="h-full w-full flex flex-col items-center justify-center">
            <div className="flex flex-col gap-4 md:text-right text-center">
              <h1>Welcome</h1>
              <p className="text-secondary">
                My name is Alexander Delisle, <br /> and I'm a Software Engineer
              </p>
            </div>
          </div>
          <div>
            <div className="w-[300px] h-[300px] overflow-hidden relative rounded-2xl">
              <img
                src="/images/alex-image.jpg"
                alt="a picture of alex"
                className="object-cover absolute h-full w-full"
              />
            </div>
          </div>
        </div>
      </GridTitleSection>
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
          <Button className="hover:cursor-pointer">
            <Link href="/blog">All Blogs</Link>
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
