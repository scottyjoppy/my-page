import { Button } from "@/components/ui/button";
import Link from "next/link";
import ModeToggle from "./ModeToggle";
import { IconsMap } from "./navbar/iconMap";
import { MenuItem } from "./navbar/types";

interface DesktopNavbarProps {
  items: MenuItem[];
}

async function DesktopNavbar({ items }: DesktopNavbarProps) {
  return (
    <div className="hidden md:flex items-center space-x-4">
      {items.map((item) => {
        const Icon = IconsMap[item.iconName];
        return (
          <Button
            key={item.label}
            variant="ghost"
            className="flex items-center gap-2"
            asChild
          >
            <Link href={item.href}>
              <Icon className="w-4 h-4" />
              <span className="hidden lg:inline">{item.label}</span>
            </Link>
          </Button>
        );
      })}
      <ModeToggle />
    </div>
  );
}
export default DesktopNavbar;
