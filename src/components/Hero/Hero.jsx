import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import bebote from './img.png'
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hola, soy Emanuel</h1>
        <p className={styles.description}>
          Soy un desarrollador full-stack con 2 años años de experiencia usando React y NodeJS.
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contactame 
        </a>
      </div>
      <img
        src={getImageUrl("hero/img.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
