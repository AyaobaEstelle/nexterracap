"use client";
import React from "react";
import styles from "./styles.module.css";
import Button from "../Button/button";
import Counter from "../NumberCounter/Counter";

export default function Team() {
  return (
    <div className={styles.container}>
      <hr />

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
        <div className={styles.button}>
          <a href="/about">
            <Button text="Learn more" />
          </a>
        </div>
      </div>
      <div className={styles.team}>
        <img
          src="https://i.postimg.cc/1tsmTC5D/team-img.avif"
          alt="team"
          className={styles.teamImage}
        />

        <div className={styles.teamText}>
          <small>The story of</small>
          <h1>The Team</h1>
          <p>
            Driven by shared vision and boundless determination, we are a
            collective of progress catalysts and advocates for positive change.
            Our belief in untapped markets and sustainable entrepreneurship
            fuels our drive to redefine emerging entrepreneurs.
          </p>
          <p className={styles.teamTextContent}>
            Challenging the status quo and embracing diversity, we aim to
            partner, make strategic investments and provide support to those who
            dare to create a lasting impact.
          </p>
          <a href="#" className={styles.teamButton}>
            Learn more
          </a>
          <Counter />
        </div>
      </div>
      <div className={styles.ButtonApply}>
        <a href="https://share-eu1.hsforms.com/1k1EyUwMLQZuu_54oNvtDogfu7um">
          <Button text="Apply for funding" />
        </a>
      </div>
    </div>
  );
}
