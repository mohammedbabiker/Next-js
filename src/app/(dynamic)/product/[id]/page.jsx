// export const generateMetadata = {
//   title: `Teashop - ${product.title}`,
//   description:
//     "Discover a world of endless shopping possibilities at out online store. Browse, choose, and order your favorite products from the comfort fo your home.",
//one on line 18 instead of this function};
import { NextRequest, NextResponse, userAgent } from "next/server";
import Image from "next/image";
import styles from "./page.module.css";

async function getData(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function generateMetadata({ params }) {
  const product = await getData(params.id);
  return {
    title: product.title,
    description: product.description,
  };
}

export default async function Post({ params }) {
  const product = await getData(params.id);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.info}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.desc}>{product.description}</p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={product.thumbnail}
            alt="product image"
            fill={true}
          />
          <span className={styles.author}>{product.category}</span>
        </div>
      </header>
      <div className={styles.content}>
        <div className={styles.gallery}>
          {product.images.map((image) => (
            <Image
              key={product.id}
              src={image}
              alt={product.title}
              width={200}
              height={200}
            />
          ))}
        </div>
        {/* <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          sed impedit deleniti ad eius assumenda deserunt, quas quaerat natus
          omnis iusto. Quia qui, officia ea numquam minus consequuntur quaerat,
          aspernatur modi, dolores nihil atque! Corporis mollitia dolorum esse
          excepturi animi, cupiditate nesciunt magnam provident tempora
          deleniti, quisquam harum, quia quidem neque deserunt repudiandae ea
          quas quod sunt sapiente unde voluptates vero temporibus! Possimus
          libero voluptatem suscipit, debitis nihil labore assumenda est
          laudantium ducimus fugit rerum quasi inventore modi impedit earum
          recusandae aperiam minus repellat laborum illo obcaecati doloribus id
          quod voluptas! Deserunt error, dicta sit dolor officiis dolore
          aperiam, voluptatibus culpa inventore, deleniti nemo? Eveniet harum
          minima corrupti esse, aperiam neque tempora iusto nihil. Dolores
          officiis exercitationem explicabo, corrupti hic eligendi quas ipsa,
          facilis perspiciatis consequatur libero iste neque rerum non nihil ad,
          quibusdam esse odio mollitia. Culpa mollitia neque magni asperiores,
          vero voluptas ullam nam illum beatae nesciunt dolore fuga provident
          sequi voluptatibus animi? Iure harum tempore molestias non ipsum,
          voluptatum accusamus fugiat voluptatem maxime, aspernatur quasi
          obcaecati asperiores molestiae blanditiis provident ex deleniti
          corrupti necessitatibus? Natus nam illum dolorum soluta tenetur
          quaerat quo quidem et dolore enim laborum suscipit rem, atque
          reiciendis. Illum eaque voluptatum accusantium hic reiciendis.
        </p> */}
      </div>
    </div>
  );
}
