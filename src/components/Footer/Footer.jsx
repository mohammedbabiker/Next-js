import { RiGithubLine } from "react-icons/ri";

import styles from "./footer.module.css";
import Image from "next/image";
export default function Footer() {
  return (
    <div className={styles.container}>
      <div>© 2023 Teashop. All right reserved</div>
      <div className={styles.social}>
        <a href="https://facebook.com/" target="_blank">
          <Image
            className={styles.icons}
            src="/images/icon/facebook.png"
            width={20}
            height={20}
            alt="facebook"
          />
        </a>
        <a href="https://instagram.com" target="_blank">
          <Image
            className={styles.icons}
            src="/images/icon/instagram.png"
            width={20}
            height={20}
            alt="instagram"
          />
        </a>
        <a href="https://twitter.com" target="_blank">
          <Image
            className={styles.icons}
            src="/images/icon/twitter(1).png"
            width={20}
            height={20}
            alt="twitter"
          />
        </a>
      </div>
    </div>
  );
}
