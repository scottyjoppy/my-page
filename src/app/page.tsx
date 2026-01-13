import BlogSection from "@/components/sections/blog/BlogSection";
import EndSection from "@/components/sections/end/EndSection";
import HeroSection from "@/components/sections/home/HeroSection";
import TimelineSection from "@/components/sections/timeline/TimelineSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BlogSection />
      <TimelineSection />
      <EndSection />
    </>
  );
}
