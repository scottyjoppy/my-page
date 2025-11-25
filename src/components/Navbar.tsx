import Link from "next/link";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import { menuItems } from "./navbar/menuItems";

async function Navbar() {
  return (
    <nav className="sticky top-0 w-full border-b-8 border-primary bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-bold text-primary tracking-wider"
            >
              ALX
            </Link>
          </div>
          <DesktopNavbar items={menuItems} />
          <MobileNavbar items={menuItems} />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
