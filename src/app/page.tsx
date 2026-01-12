import BlogSection from "@/components/new-styles/sections/blog/BlogSection";
import EndSection from "@/components/new-styles/sections/end/EndSection";
import HeroSection from "@/components/new-styles/sections/home/HeroSection";
import TimelineSection from "@/components/new-styles/sections/timeline/TimelineSection";

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
