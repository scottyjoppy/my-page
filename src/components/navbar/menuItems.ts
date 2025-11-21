import getPostMetadata from "utils/getPostMetadata";
import { MenuItem } from "./types";

// const postMetadata = getPostMetadata().slice(0, 5);
// const postPreviews = postMetadata.map((post) => ({
//   label: post.title as string,
//   href: `/blog/${post.slug}`,
// }));

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
    // dropdown: postPreviews,
  },
  // {
  //   label: "MyDocs",
  //   iconName: "Library",
  //   href: "/mydocs",
  // },
];
