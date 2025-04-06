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
        <GridSectionCenterFull>
          <Image
            src="/images/alex-image.jpg"
            width={500}
            height={500}
            objectFit="contain"
            alt="A picture of Alexander Delisle"
          />
        </GridSectionCenterFull>
      </GridSection>
    </>
  );
}

export default About;
