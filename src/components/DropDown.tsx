"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "lucide-react";
import { MenuItem } from "./navbar/types";

interface DropdownProps {
  label: String;
  items: MenuItem[];
}

export function DropDown({ label, items }: DropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Link>{label}</Link>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {items.map((item) => (
          <>
            <DropdownMenuLabel>{item.label}</DropdownMenuLabel>
            <DropdownMenuSeparator />
          </>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
