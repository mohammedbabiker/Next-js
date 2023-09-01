import Image from "next/image";
import styles from "./page.module.css";
export default function Post() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.info}>
          <h1 className={styles.title}>Lorem ipsum dolor sit</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis non
            quo commodi debitis illo ut necessitatibus doloremque fugiat
            voluptates voluptate.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            fill={true}
          />
          <span className={styles.author}>mohammed babiker</span>
        </div>
      </header>
      <div className={styles.content}>
        <p className={styles.text}>
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
        </p>
      </div>
    </div>
  );
}
