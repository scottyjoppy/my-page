import { MenuItem } from "./types";

export const menuItems: MenuItem[] = [
  {
    label: "Home",
    iconName: "HomeIcon",
    href: "/",
  },
  {
    label: "About",
    iconName: "User",
    href: "/about",
  },
  {
    label: "Projects",
    iconName: "Code",
    href: "/projects",
  },
  {
    label: "Blog",
    iconName: "Notebook",
    href: "/blog",
    dropdown: [
      { label: "Newest", href: "/mydocs" },
      { label: "Oldest", href: "/about" },
    ],
  },
  {
    label: "MyDocs",
    iconName: "Library",
    href: "/mydocs",
  },
];
