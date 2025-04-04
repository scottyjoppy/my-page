import GridSection from "@/components/GridSection";
import GridSectionCenterFull from "@/components/GridSectionCenterFull";
import GridTitleSection from "@/components/GridTitleSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <GridSection>
        <GridTitleSection>
          <h1>Welcome</h1>
          <p className="text-secondary">Alexander Delisle's page</p>
        </GridTitleSection>
        <GridSectionCenterFull
          className="hover:backdrop-brightness-95 dark:hover:backdrop-brightness-200"
          colNum="2"
        >
          <div className="mx-auto flex items-center justify-center h-full">
            <Button className="hover:cursor-pointer">
              <Link href="/blog">Go To Blog</Link>
            </Button>
          </div>
        </GridSectionCenterFull>
      </GridSection>
    </>
  );
}
