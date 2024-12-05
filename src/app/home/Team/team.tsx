"use client";
import React from "react";
import styles from "./styles.module.css";
import Counter from "../NumberCounter/Counter";
import Button from "../Button/button";

export default function Team() {
  return (
    <div className={styles.container}>
      <div className={styles.Frame}>
        <h1>who we are</h1>
        <p>
          Nexterra Capital is an early-growth venture capital firm headquartered
          in Dublin, Ireland, committed to driving impact, innovation, and
          partnership across SSA and MENA. We believe in the untapped potential
          of these regions and have had the fortune to learn from and work with
          over 50 exceptional founders in the past 5 years, Our expertise lies
          in identifying and amplifying promising tech startups that deliver
          financial returns and create positive social and economic impact.
        </p>
        <button className={styles.button}>
          <a href="/about">
            <Button text="Learn more" />
          </a>
        </button>
      </div>
      <hr />
      <div className={styles.team}>
        <img src="https://i.postimg.cc/1tsmTC5D/team-img.avif" alt="" />

        <div className={styles.teamText}>
          <small>The story of</small>
          <h1>The Team</h1>
          <p>
            Driven by shared vision and boundless determination, we are <br /> a
            collective of progress catalysts and advocates for positive change.{" "}
            <br />
            Our belief in untapped markets and sustainable entrepreneurship
            fuels <br /> our drive to redefine emerging entrepreneurs.
          </p>
          <p className={styles.teamTextContent}>
            Challenging the status quo and embracing diversity, we aim to
            partner,
            <br /> make strategic investments and provide support to those who
            dare <br />
            to create a lasting impact.
          </p>
          <a href="#" className={styles.teamButton}>
            Learn more
          </a>
          <Counter />
        </div>
      </div>
      <button className={styles.ButtonApply}>
        <a href="https://share-eu1.hsforms.com/1k1EyUwMLQZuu_54oNvtDogfu7um">
          <Button text="Apply for funding" />
        </a>
      </button>
    </div>
  );
}
