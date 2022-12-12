import styles from "styles/hero.module.css";
import Image from "next/image";
// import cube from "images/cube.jpg";

const cube = {
  src: "https://images.microcms-assets.io/assets/b5c33691f83a4424b4cd755f438e4967/f4505474dd0f4259981d15d8af82cf09/cube.jpg",
  height: 1300,
  width: 1500,
  blurDataURL: "data:image/jpeg;base64",
};

export default function Hero({ title, subtitle, imageOn = false }) {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      {imageOn && (
        <figure className={styles.image}>
          <Image
            src={cube}
            alt=""
            layout="responsive"
            sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw"
            priority
            placeholder="blur"
          />
        </figure>
      )}
    </div>
  );
}
