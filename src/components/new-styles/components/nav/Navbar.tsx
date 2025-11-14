import Link from "next/link";
import styles from "./Navbar.module.css";
import { MenuItem } from "@/components/navbar/types";

const items = 

async function Navbar() {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/" className={styles.icon}>
          ALX
        </Link>
        <div className={styles["pages-container"]}>
          {MenuItem.map}
          <Link href="/" className={styles["page-link"]}>
            something
          </Link>
          <Link href="/" className={styles["page-link"]}>
            something
          </Link>
          <Link href="/" className={styles["page-link"]}>
            something
          </Link>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
