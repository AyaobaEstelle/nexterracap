"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

export default function Hero() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            N<span>exterra capital</span>
          </h1>
          <div className={styles.heroSubtitle}>
            <p>
              We are an early stage VC firm backing exceptional founders at the
              seed-post seed stages.
            </p>
            <p>
              We believe in the power of entrepreneurship and innovation to
              transform economies and societies. By supporting and investing in
              tech-enabled businesses across Africa, we aim to fuel job
              creation, stimulate economic growth, and address pressing social
              and environmental challenges.
            </p>
            <p>
              Recognizing the urgent need to address climate change, we are
              committed to channeling funding to businesses that actively
              mitigate its impact. Additionally, we support enterprises that
              champion equal opportunities for all.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
