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
    label: "Blogs",
    iconName: "Notebook",
    href: "/blog",
    // dropdown: postPreviews,
  },
  // {
  //   label: "MyDocs",
  //   iconName: "Library",
  //   href: "/mydocs",
  // },
];
