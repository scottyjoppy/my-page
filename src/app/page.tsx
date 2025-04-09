import GridSection from "@/components/GridSection";
import GridSectionCenterFull from "@/components/GridSectionCenterFull";
import GridTitleSection from "@/components/GridTitleSection";
import SocialIcons from "@/components/SocialIcons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <GridTitleSection>
        <h1>Welcome</h1>
        <p className="text-secondary">Alexander Delisle's page</p>
      </GridTitleSection>
      <GridSection cols={{ lg: 2 }}>
        <GridSectionCenterFull>
          <Button className="hover:cursor-pointer">
            <Link href="/blog">Go To Blog</Link>
          </Button>
        </GridSectionCenterFull>
        <GridSectionCenterFull>
          <SocialIcons />
        </GridSectionCenterFull>
      </GridSection>
    </>
  );
}
