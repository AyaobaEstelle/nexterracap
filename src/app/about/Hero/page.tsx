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
        <header className={styles.heroHeader}>
          <img src="https://i.postimg.cc/DfCvjcVb/nexterra-img.png" alt="" />
          <nav className={styles.heroNav}>
            <a href="/home" className={styles.heroNavItem}>
              Home
            </a>
            <a href="/" className={styles.heroNavItem}>
              About
            </a>
            <a href="/esg" className={styles.heroNavItem}>
              ESG
            </a>
            <div className={styles.dropdown}>
              <a
                href="#"
                onClick={toggleDropdown}
                className={`${styles.dropdownToggle} ${styles.heroNavItem}`}
              >
                Approach
                <span
                  className={`${styles.arrow} ${
                    isDropdownOpen ? styles.arrowUp : ""
                  }`}
                ></span>
              </a>
              {isDropdownOpen && (
                <ul className={styles.dropdownMenu}>
                  <li className={styles.dropdownItem}>
                    <a href="/strategy" className={styles.dropdownLink}>
                      Investment Strategy
                    </a>
                  </li>
                  <li className={styles.dropdownItem}>
                    <a href="/syndicate" className={styles.dropdownLink}>
                      Syndicate Investment
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </nav>
          <div className={styles.heroAction}>
            <a href="#" className={styles.heroActionLink}>
              Insights
            </a>
            <a href="#" className={styles.heroActionButton}>
              Contact
            </a>
          </div>
        </header>

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
