import GridTitleSection from "@/components/GridTitleSection";
import GridSectionCenterFull from "@/components/GridSectionCenterFull";
import Title from "@/components/Title";
import Image from "next/image";

function About() {
  return (
    <>
      <GridTitleSection>
        <Title>About page</Title>
      </GridTitleSection>
      <GridSectionCenterFull>
        <Image src="/images/alex-image.jpg" width={200} height={200} alt="A picture of Alexander Delisle"/>
      </GridSectionCenterFull>
    </>
  );
}

export default About;
