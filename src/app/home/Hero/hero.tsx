"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Button from "../Button/button";

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
    "Catalyzing",
    "Distrupting",
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
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            {displayedText}
            <br /> <span className={styles.heroNormal}>Innovation for</span>
            <span className={styles.heroTitleHighlight}>
              {" "}
              Sustainable Impact{" "}
            </span>
          </h1>
          <p className={styles.heroDescription}>
            Our mission is to empower innovation for sustainable impact. We are
            driven by a deep commitment to fostering resilience, inclusivity,
            and equity in every aspect of our work. Our goal is to drive
            financial success and also create lasting positive change in the
            ecosystems we support.
          </p>
        </div>
      </div>
      <div className={styles.button}>
        <a href="/about">
          <Button text="Learn more" />
        </a>
      </div>
    </div>
  );
}
