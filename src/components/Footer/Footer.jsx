import styles from "./footer.module.css";
import Image from "next/image";
export default function Footer() {
  return (
    <div className={styles.container}>
      <div>© 2023 Teashop. All right reserved</div>
      <div className={styles.social}>
        <Image
          src="/images/icon/facebook.png"
          width={20}
          height={20}
          style={styles.icons}
          alt="facebook"
        />
        <Image
          src="/images/icon/github.png"
          width={20}
          height={20}
          style={styles.icons}
          alt="facebook"
        />
        <Image
          src="/images/icon/twitter.png"
          width={20}
          height={20}
          style={styles.icons}
          alt="facebook"
        />
      </div>
    </div>
  );
}
