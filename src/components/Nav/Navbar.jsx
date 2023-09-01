import Link from "next/link";
import { links } from "./data";
// import Button from "../../elements/Button/Button";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import Logo from "../../elements/Logo/Logo";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <button className={styles.logout}>Logout</button>
      </div>
    </div>
  );
}
