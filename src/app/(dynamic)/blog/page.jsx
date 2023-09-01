import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function Blog() {
  return (
    <div className={styles.mainContainer}>
      <Link href="/blog/id" className={styles.post}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={
              "https://images.pexels.com/photos/10002812/pexels-photo-10002812.jpeg"
            }
            width={350}
            height={250}
            alt="post image"
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Post Title</h1>
          <p className={styles.desc}>post text</p>
        </div>
      </Link>
      {/* ---------------------------next----------------------------------- */}
      <Link href="/blog/id" className={styles.post}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={
              "https://images.pexels.com/photos/10002812/pexels-photo-10002812.jpeg"
            }
            width={350}
            height={250}
            alt="post image"
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Post Title</h1>
          <p className={styles.desc}>post text</p>
        </div>
      </Link>
      {/* ---------------------------next----------------------------------- */}
      <Link href="/blog/id" className={styles.post}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={
              "https://images.pexels.com/photos/10002812/pexels-photo-10002812.jpeg"
            }
            width={350}
            height={250}
            alt="post image"
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Post Title</h1>
          <p className={styles.desc}>post text</p>
        </div>
      </Link>
    </div>
  );
}
