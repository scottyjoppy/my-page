import Link from "next/link";
import { SocialIconList } from "./socialIcons/SocialIconList";

const SocialIcons = () => {
  return (
    <>
      {SocialIconList.map((link, index) => (
        <Link href={link.href} key={index} target="_blank">{<link.icon className="w-15 h-15 shadow-xs transition-all hover:fill-primary/90"/>}</Link>
      ))}
    </>
  );
};

export default SocialIcons;
