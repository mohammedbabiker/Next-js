import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/images/hero.svg";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <h1 className={styles.title}>Your Best Online shop destination!</h1>
        <p className={styles.desc}>
          Discover a world of endless shopping possibilities at out online
          store. Browse, choose, and order your favorite products from the
          comfort of your hove
        </p>
        <a href="/product">
          <button className={styles.button}>Shop Now</button>
        </a>
      </div>
      <div className={styles.col}>
        <Image src={Hero} alt="hero img" className={styles.img} />
      </div>
    </div>
  );
}
