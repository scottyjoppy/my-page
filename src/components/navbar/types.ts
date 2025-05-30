import { IconsMap } from "./iconMap";

export type MenuItem = {
  label: string;
  iconName?: keyof typeof IconsMap; // Icon name as a key of IconsMap
  href: string; // Link for the menu item
  dropdown?: { label: string; href: string }[];
};
