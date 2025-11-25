import GridSection from "@/components/GridSection";
import GridSectionCenterFull from "@/components/GridSectionCenterFull";
import GridTitleSection from "@/components/GridTitleSection";

function MyDocs() {
  return (
    <>
      <GridTitleSection>
        <h1>MyDocs page</h1>
      </GridTitleSection>
      <GridSection>
        <GridSectionCenterFull>
          <p>Here I have my personal Docs</p>
        </GridSectionCenterFull>
      </GridSection>
    </>
  );
}

export default MyDocs;
