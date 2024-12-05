"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Button from "../Button/page";

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const messages = [
    "Capitalizing",
    "Catalizing",
    "Distupting",
    "Enabling",
    "Empowering",
  ];

  useEffect(() => {
    if (charIndex < messages[messageIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + messages[messageIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      const nextMessageTimeout = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setMessageIndex((prev) => (prev + 1) % messages.length);
      }, 2000);

      return () => clearTimeout(nextMessageTimeout);
    }
  }, [charIndex, messageIndex, messages]);

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <header className={styles.heroHeader}>
          <img src="https://i.postimg.cc/DfCvjcVb/nexterra-img.png" alt="" />
          <nav className={styles.heroNav}>
            <a href="/" className={styles.heroNavItem}>
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
                    <a href="/syndicate" className={styles.dropdownLink}>
                      Syndicate Investment
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </nav>
          <div className={styles.heroAction}>
            <a href="#/insights" className={styles.heroActionLink}>
              Insights
            </a>
            <a href="/contact" className={styles.heroActionButton}>
              Contact
            </a>
          </div>
        </header>

        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            {displayedText}
            <br /> <span className={styles.heroNormal}>Innovation for</span>
            <span className={styles.heroTitleHighlight}>
              {" "}
              Sustainable Impact{" "}
            </span>
          </h1>
          <p className={styles.heroSubtitle}>
            Our mission is to empower innovation for sustainable impact. We are
            driven by a deep commitment to fostering resilience, inclusivity,
            and equity in every aspect of our work. <br /> Our goal is to drive
            financial success and also create lasting positive change in the
            ecosystems we support.
          </p>
        </div>
      </div>
      <button className={styles.button}>
        <a href="#">
          <Button text="Learn more" />
        </a>
      </button>
    </div>
  );
}
