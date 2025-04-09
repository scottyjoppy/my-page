import GridSection from "@/components/GridSection";
import GridSectionCenterFull from "@/components/GridSectionCenterFull";
import GridTitleSection from "@/components/GridTitleSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <GridTitleSection>
        <h1>Welcome</h1>
        <p className="text-secondary">Alexander Delisle's page</p>
      </GridTitleSection>
      <GridSection cols={{ lg: 1 }}>
        <GridSectionCenterFull>
          <Button className="hover:cursor-pointer">
            <Link href="/blog">Go To Blog</Link>
          </Button>
        </GridSectionCenterFull>
        {/* <GridSectionCenterFull>
          <div className="flex flex-col">
            <h2 className="text-2xl">Projects</h2>
            <p>Current:</p>
          </div>
        </GridSectionCenterFull> */}
      </GridSection>
    </>
  );
}
