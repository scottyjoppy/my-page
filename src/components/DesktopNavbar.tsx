import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IconsMap } from "./navbar/iconMap";
import { MenuItem } from "./navbar/types";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

interface DesktopNavbarProps {
  items: MenuItem[];
}

async function DesktopNavbar({ items }: DesktopNavbarProps) {
  return (
    <div className="hidden md:flex items-center space-x-4">
      {items.map((item) => {
        const Icon = item.iconName ? IconsMap[item.iconName] : null;

        if (item.dropdown) {
          return (
            <NavigationMenu key={item.label}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <Link href={item.href || "#"} className="flex items-center">
                      {Icon && <Icon className="w-4 h-4 mr-2" />}
                      <span className="hidden lg:inline">{item.label}</span>
                    </Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    {item.dropdown.map((ddItem) => (
                      <NavigationMenuLink href={ddItem.href} key={ddItem.label}>
                        {ddItem.label}
                      </NavigationMenuLink>
                    ))}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          );
        }

        return (
          <Button
            key={item.label}
            variant="ghost"
            className="flex items-center gap-2"
            asChild
          >
            <Link href={item.href || "#"}>
              {Icon && <Icon className="w-4 h-4" />}
              <span className="hidden lg:inline">{item.label}</span>
            </Link>
          </Button>
        );
      })}

      {/* <ModeToggle /> */}
    </div>
  );
}
export default DesktopNavbar;
