import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={Styles.container}>
      <Link href="/" className={styles.logo}>
        Teashop
      </Link>
    </div>
  );
}
