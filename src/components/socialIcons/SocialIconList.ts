import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMailOpen } from "react-icons/io5";
import { IconType } from "react-icons/lib";

interface IconList {
  icon: IconType;
  href: string;
}

export const SocialIconList: IconList[] = [
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/alexander-delisle-3a7a68227/",
  },
  {
    icon: FaGithub,
    href: "https://github.com/scottyjoppy",
  },
  {
    icon: IoMailOpen,
    href: "mailto:alexanderdelisle@yahoo.ca",
  },
];
