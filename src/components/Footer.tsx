import SocialIcons from "@/components/SocialIcons";
import Texture from "./Texture";

function Footer() {
  return (
    <footer className="mt-auto w-full border-primary bg-background relative font-inter h-16">
      <Texture />
      <div className="max-w-7xl mx-auto p-4 flex items-center justify-center">
        <SocialIcons />
      </div>
    </footer>
  );
}

export default Footer;
