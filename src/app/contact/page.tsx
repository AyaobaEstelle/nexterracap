"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Footer from "../home/Footer/page";

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
            <a href="/insights" className={styles.heroActionLink}>
              Insights
            </a>
            <a href="/" className={styles.heroActionButton}>
              Contact
            </a>
          </div>
        </header>
      </div>
      <div className={styles.text}>
        <h2>Contact us</h2>
        <p>
          PLEASE FILL OUT ONE OF THE FORMS BELOW AND WE WILL BE IN TOUCH AS SOON
          AS POSSIBLE
        </p>
        <div className={styles.contactButton}>
          <button>
            <a href="https://share-eu1.hsforms.com/1k1EyUwMLQZuu_54oNvtDogfu7um">
              apply for funding
            </a>
          </button>
          <button>
            <a href="https://share-eu1.hsforms.com/1MgjuEspOT-ax0vGUkp5ESQfu7um">
              investors/general enquiry
            </a>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
