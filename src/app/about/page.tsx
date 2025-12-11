import GridSection from "@/components/GridSection";
import GridSectionCenterFull from "@/components/GridSectionCenterFull";
import Image from "next/image";
import Link from "next/link";

function About() {
  return (
    <>
      <h1>About page</h1>
      <GridSection>
        <GridSectionCenterFull colSpan={{ lg: 2, md: 1 }}>
          <p className="max-w-sm text-foreground">
            My name is Alexander Delisle. I'm 24, and I relocated to Vienna from
            Canada last year. I'm transitioning into software engineering and am
            currently educating myself on the programming fundamentals,
            security, web design, and data storage.
          </p>
        </GridSectionCenterFull>
        <GridSectionCenterFull className="relative">
          <Image
            alt="Alexander Delisle"
            fill
            src="/images/alex-image.jpg"
            className="object-cover rounded-sm"
          />
        </GridSectionCenterFull>
      </GridSection>
      <GridSection>
        <GridSectionCenterFull className="relative">
          <Image
            alt="Alexander Delisle"
            fill
            src="/images/alex-camera.jpg"
            className="object-cover rounded-sm object-[center_100%]"
          />
        </GridSectionCenterFull>
        <GridSectionCenterFull colSpan={{ lg: 2, md: 1 }}>
          <p className="max-w-sm text-foreground">
            I studied film production and wore many hats on and off set. I love
            cameras, lighting, directing, writing, but was a video editor more
            than anything.
          </p>
        </GridSectionCenterFull>
      </GridSection>
      <GridSection>
        <GridSectionCenterFull colSpan={{ lg: 2, md: 1 }}>
          <p className="max-w-sm text-foreground">
            Aside from film, music has always been an important part of my life.
            I love piano and have been making songs from a very young age. In
            and out of school I've grown to love making scores for short films.
            My final project was a{" "}
            <Link
              href="https://vimeo.com/720844027"
              target="_blank"
              className="font-bold hover:underline"
            >
              documentary
            </Link>{" "}
            about me making a song.
          </p>
        </GridSectionCenterFull>
        <GridSectionCenterFull className="relative overflow-hidden">
          <Image
            alt="Alexander Delisle"
            fill
            src="/images/alex-piano.png"
            className="rotate-1 scale-110 object-cover rounded-sm object-[center_100%]"
          />
        </GridSectionCenterFull>
      </GridSection>
    </>
  );
}

export default About;
