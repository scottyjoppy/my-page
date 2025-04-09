import Link from "next/link";
import { SocialIconList } from "./socialIcons/SocialIconList";

interface SocialProps {
  size?: number;
}

const SocialIcons = ({ size = 2 }: SocialProps) => {
  return (
    <>
      {SocialIconList.map((link, index) => (
        <Link href={link.href} key={index} target="_blank">
          {
            <link.icon
            style={{width: `${size}rem`, height: `${size}rem`}}
              className="transition-all hover:fill-primary/90"
            />
          }
        </Link>
      ))}
    </>
  );
};

export default SocialIcons;
