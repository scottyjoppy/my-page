import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMailOpen } from "react-icons/io5";
import { IconType } from "react-icons/lib";

interface IconList {
  label: string;
  icon: IconType;
  href: string;
}

export const SocialIconList: IconList[] = [
  {
    label: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/alexander-delisle-3a7a68227/",
  },
  {
    label: "GitHub",
    icon: FaGithub,
    href: "https://github.com/scottyjoppy",
  },
  {
    label: "Email",
    icon: IoMailOpen,
    href: "mailto:alexanderdelisle@yahoo.ca",
  },
];
