import GridSectionCenterFull from "@/components/GridSectionCenterFull";
import GridTitleSection from "@/components/GridTitleSection";
import Title from "@/components/Title";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <GridTitleSection>
        <Title>Welcome</Title>
        <p className="text-secondary">Alexander Delisle's page</p>
      </GridTitleSection>
      <GridSectionCenterFull
        className="hover:backdrop-brightness-95"
        colNum="2"
      >
        <div className="mx-auto flex items-center justify-center h-full">
          <Button>
            <Link href="/blog">Go To Blog</Link>
          </Button>
        </div>
      </GridSectionCenterFull>
      <GridSectionCenterFull
        className="hover:backdrop-brightness-95"
        colNum="1"
      >
        <h1>test</h1>
      </GridSectionCenterFull>
      <GridSectionCenterFull
        className="hover:backdrop-brightness-95"
        colNum="2"
      >
        <h1>test</h1>
      </GridSectionCenterFull>
    </>
  );
}
