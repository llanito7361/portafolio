import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Sobre mi</h2>
      <div className={styles.content}>
        {/* <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        /> */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Desarrollador Frontend</h3>
              <p>
Soy un desarrollador frontend con experiencia en la construcción de sitios responsivos.
 </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              Tengo experiencia desarrollando sistemas back-end rápidos y API's
              
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Habilidades blandas</h3>
              <p>
              Soy muy comunicativo y proactivo. Mis habilidades en la comunicación y
      mi capacidad para tomar iniciativas se han desarrollado a lo largo de mi
      experiencia, como instructor en colonias de
      vacaciones y en la facultad de ingeniería.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
