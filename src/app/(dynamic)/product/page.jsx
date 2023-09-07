export const metadata = {
  title: "Teashop - Products",
  description:
    "Discover a world of endless shopping possibilities at out online store. Browse, choose, and order your favorite products from the comfort fo your home.",
};

import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

async function getData() {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function product() {
  const data = await getData();
  const products = data.products;

  console.log(products);
  return (
    <div className={styles.mainContainer}>
      {products.map((products) => (
        <Link
          href={`./product/${products.id}`}
          className={styles.post}
          key={products.id}
        >
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={products.thumbnail}
              width={350}
              height={250}
              alt="post image"
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{products.title}</h1>
            <p className={styles.desc}>{products.description}</p>
          </div>
        </Link>
      ))}

      {/* ---------------------------next----because they are static and i wont something from API- */}
      {/* <Link href="/product/id" className={styles.post}>
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
      </Link> */}
      {/* ---------------------------next----------------------------------- */}
      {/* <Link href="/product/id" className={styles.post}>
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
      </Link> */}
    </div>
  );
}
