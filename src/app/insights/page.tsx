"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Footer from "../home/Footer/footer";

export default function Insights() {
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
            <a href="about" className={styles.heroNavItem}>
              About
            </a>
            <a href="esg" className={styles.heroNavItem}>
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
            <a href="/" className={styles.heroActionLink}>
              Insights
            </a>
            <a href="/contact" className={styles.heroActionButton}>
              Contact
            </a>
          </div>
        </header>
      </div>
      <div className={styles.text}>
        <h1>INSIGHTS ON TECHNOLOGY AND AFRICA.</h1>
        <div className={styles.textContent}>
          <h2>Joy jack</h2>
          <p>
            Read writing from Joy Jack on Medium. investor & partner @Nexterra
            Capital | venture partner @Republic | #millennial #ManUtd.
          </p>
          <p>
            {" "}
            Every day, Joy Jack and thousands of other voices read, write, and
            share important stories on Medium.
          </p>
          <img
            src="https://i.postimg.cc/PqsP2jCT/joy-jack.jpg
"
            alt="joy-jack"
          />
          <button>
            <a href="https://medium.com/nexterra-capital-insights/the-healthcare-imperative-in-africa-5d8f0d1f4fc9">
              Read more
            </a>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
