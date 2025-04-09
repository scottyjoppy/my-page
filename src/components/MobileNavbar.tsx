"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";
import { IconsMap } from "./navbar/iconMap";
import { MenuItem } from "./navbar/types";

interface MobileNavbarProps {
  items: MenuItem[];
}

function MobileNavbar({ items }: MobileNavbarProps) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex md:hidden items-center space-x-2">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="mr-2"
      >
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>

      <Sheet open={showMobileMenu} onOpenChange={setShowMobileMenu}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <MenuIcon className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px]">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <nav className="h-full space-y-4 mt-6">
            <Accordion type="multiple" className="flex flex-col gap-5 h-full w-full">
              {items.map((item) => {
                const Icon = item.iconName ? IconsMap[item.iconName] : null;

                if (item.dropdown) {
                  return (
                    <AccordionItem
                      className="border-b-0 mr-4"
                      key={item.label}
                      value={item.label}
                    >
                      <AccordionTrigger className="py-2 hover:no-underline hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50">
                        <div className="flex items-center justify-center gap-3 ml-3">
                          {Icon && <Icon className="w-4 h-4" />}
                          <a href={item.href} className="hover:cursor-pointer">
                            {item.label}
                          </a>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 pl-4">
                          {item.dropdown.map((dd) => (
                            <li key={dd.label}>
                              <Link
                                href={dd.href}
                                className="block px-2 py-1"
                                onClick={() => setShowMobileMenu(false)} // optional: close menu on click
                              >
                                {dd.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  );
                }

                return (
                  <Button
                    variant="ghost"
                    className="flex items-center gap-3 justify-start"
                    asChild
                    key={item.label}
                    onClick={() => setShowMobileMenu(false)} // optional: close menu on click
                  >
                    <Link href={item.href} className="flex items-center gap-3">
                      {Icon && <Icon className="w-4 h-4" />}
                      {item.label}
                    </Link>
                  </Button>
                );
              })}
            </Accordion>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNavbar;
