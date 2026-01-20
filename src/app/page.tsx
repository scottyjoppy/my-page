import BlogSection from "@/components/sections/home/blog/BlogSection";
import EndSection from "@/components/sections/home/end/EndSection";
import HeroSection from "@/components/sections/home/HeroSection";
import TimelineSection from "@/components/sections/home/timeline/TimelineSection";

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
