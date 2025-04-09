import GridSection from "@/components/GridSection";
import GridSectionCenterFull from "@/components/GridSectionCenterFull";
import GridTitleSection from "@/components/GridTitleSection";
import Image from "next/image"; 

function About() {
  return (
    <>
      <GridTitleSection>
        <h1>About page</h1>
      </GridTitleSection>

      <GridSection>
        <GridSectionCenterFull colSpan={{lg: 2, md: 1}}>
          <p className="max-w-sm text-foreground">
            My name is Alexander Delisle. I'm 24, and I relocated to Vienna from
            Canada last year. I'm transitioning into software engineering and am
            currently educating myself on the programming fundamentals,
            security, web design, and data storage.
          </p>
        </GridSectionCenterFull>
        <GridSectionCenterFull className="relative">
          <Image alt="Alexander Delisle" fill src="/images/alex-image.jpg" className="object-cover rounded-sm"/>
        </GridSectionCenterFull>
      </GridSection>
      
    </>
  );
}

export default About;
