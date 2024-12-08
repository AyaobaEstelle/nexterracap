import React from "react";
import styles from "./styles.module.css";

export default function Why() {
  return (
    <div className={styles.container}>
      <h1>Why us?</h1>
      <div className={styles.content}>
        <div className={styles.items}>
          <img src="https://i.postimg.cc/90GQMYYB/start.jpg" alt="star" />
          <h2>Commercialization & Operational Expertise</h2>
          <p>
            Our operational expertise drives successful commercialization of
            technology. As seasoned entrepreneurs, we excel in identifying
            opportunities ahead of the curve, maximizing potential for success.
          </p>
        </div>
        <div className={styles.items}>
          <img src="https://i.postimg.cc/90GQMYYB/start.jpg" alt="star" />

          <h2>Innovative Impact</h2>
          <p>
            We embody an innovative spirit that drives us to create meaningful,
            transformative impact and embrace responsibility for pioneering
            sustainable solutions and catalyzing positive change. We provide the
            resources needed to help teams thrive and make a lasting impact in
            the African business landscape.
          </p>
        </div>
        <div className={styles.items}>
          <img src="https://i.postimg.cc/90GQMYYB/start.jpg" alt="star" />

          <h2>Collaborative Excellence</h2>
          <p>
            We value the power of diverse perspectives and inclusive
            partnerships. By harnessing the strengths of our team,
            entrepreneurs, and stakeholders, we create a vibrant ecosystem where
            ideas are shared, expertise is leveraged, and opportunities are
            maximized.
          </p>
        </div>
      </div>
    </div>
  );
}
