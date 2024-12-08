"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Footer from "../home/Footer/page";

export default function Syndicate() {
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
            <a href="/about" className={styles.heroNavItem}>
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
                    <a href="/" className={styles.dropdownLink}>
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
            D<span>eal by deal syndicate investments</span>
          </h1>
          <div className={styles.heroSubtitle}>
            <p>
              Our Syndicate investments is a collaborative investment approach
              that brings together a network of strategic partners and
              investors. This strategy provides a platform for pooling
              resources, expertise, and capital to support promising startups.
              With a focus on tech and tech-enabled businesses across various
              sectors, including fintech, climate, health, and agriculture, we
              leverage our deep market knowledge and extensive network to
              identify high-potential investment opportunities.
            </p>
            <p>
              Through our Syndicate investments, we strive to drive sustainable
              growth, create meaningful impact, and deliver attractive returns
              to our investors.
            </p>
          </div>
        </div>
        <div className={styles.button}>
          <button>
            <a href="#">Join the Syndicate</a>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
