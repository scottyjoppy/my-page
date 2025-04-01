import GridSectionCenterFull from "@/components/GridSectionCenterFull";
import GridTitleSection from "@/components/GridTitleSection";
import Image from "next/image";

function About() {
  return (
    <>
      <GridTitleSection>
        <h1>About page</h1>
      </GridTitleSection>
      <GridSectionCenterFull>
        <Image
          src="/images/alex-image.jpg"
          width={200}
          height={200}
          alt="A picture of Alexander Delisle"
        />
      </GridSectionCenterFull>
    </>
  );
}

export default About;
