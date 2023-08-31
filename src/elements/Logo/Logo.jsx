import Link from "next/link";
import styles from "./logo.module.css";

import { Montserrat } from "next/font/google";
const LogoFont = Montserrat({ subsets: ["latin"], weight: ["400"] });
export default function Logo() {
  return (
    <Link href="/" className={`${styles.logo} ${LogoFont.className}`}>
      Teashop
    </Link>
  );
}
