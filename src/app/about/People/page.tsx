"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Counter from "../counter/counter";
import Link from "next/link";

export default function People() {
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = ["smart.", "innovative.", "impactful."];

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
      <div className={styles.header}>
        <h1>Our People are</h1>
        <h2>{displayedText}</h2>
      </div>
      <div className={styles.textContainer}>
        <img src="https://i.postimg.cc/1tsmTC5D/team-img.avif" alt="" />
        <div className={styles.text}>
          <h1>
            Our <span>diversity is our superpower</span>
          </h1>
          <p>
            Our management team has 20+ years of experience in startup
            ecosystems and 10+ years in Africa. We operated a Sub-Saharan
            African accelerator securing investments, with hands on support.
          </p>
          <p className={styles.textContent}>
            In addition, the extended team combines global expertise, deep local
            networks, and on-the-ground presence to unlock untapped investment
            opportunities. With a unique blend of investment professionals and
            operators, we possess the know-how to support and enhance businesses
            in our markets to drive sustainable growth.
          </p>
          <Counter />
        </div>
      </div>
      <hr className={styles.divider} />
      <div className={styles.peopleContainer}>
        <div className={styles.people}>
          <div className={styles.peopleInformation}>
            <img src="https://i.postimg.cc/PqsP2jCT/joy-jack.jpg" alt="" />
            <div className={styles.info}>
              <h2>Joy Jack</h2>
              <p>Partner</p>
              <div className={styles.socials}>
                <Link href="" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://i.postimg.cc/8zjp8PFL/envelop-svgrepo-com.png"
                    alt="Message"
                  />
                </Link>
                <Link href="" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://i.postimg.cc/0y1PgLs7/linkedin-svgrepo-com-2.png"
                    alt="LinkedIn"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.peopleInformation}>
            <img src="https://i.postimg.cc/Sxzn6sNg/rohan.jpg" alt="" />
            <div className={styles.info}>
              <h2>Rohan Goswami</h2>
              <p>Partner</p>
              <div className={styles.socials}>
                <Link href="" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://i.postimg.cc/8zjp8PFL/envelop-svgrepo-com.png"
                    alt="Message"
                  />
                </Link>
                <Link href="" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://i.postimg.cc/0y1PgLs7/linkedin-svgrepo-com-2.png"
                    alt="LinkedIn"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.peopleInformation}>
            <img src="https://i.postimg.cc/hPYJQxgJ/mark.jpg" alt="" />
            <div className={styles.info}>
              <h2>Mark Flanagan</h2>
              <p>Advisor/BM</p>
              <div className={styles.socials}>
                <Link href="" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://i.postimg.cc/8zjp8PFL/envelop-svgrepo-com.png"
                    alt="Message"
                  />
                </Link>
                <Link href="" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://i.postimg.cc/0y1PgLs7/linkedin-svgrepo-com-2.png"
                    alt="LinkedIn"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.peopleInformation}>
            <img src="https://i.postimg.cc/65q2QzsJ/jose.jpg" alt="" />
            <div className={styles.info}>
              <h2>Jose Mairura</h2>
              <p>Portfolio</p>
              <div className={styles.socials}>
                <Link href="" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://i.postimg.cc/8zjp8PFL/envelop-svgrepo-com.png"
                    alt="Message"
                  />
                </Link>
                <Link href="" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://i.postimg.cc/0y1PgLs7/linkedin-svgrepo-com-2.png"
                    alt="LinkedIn"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.peopleInformation}>
            <img src="https://i.postimg.cc/QN0KswyJ/finn.jpg" alt="" />
            <div className={styles.info}>
              <h2>Finn McConomy</h2>
              <p>Investments</p>
              <div className={styles.socials}>
                <Link href="" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://i.postimg.cc/8zjp8PFL/envelop-svgrepo-com.png"
                    alt="Message"
                  />
                </Link>
                <Link href="" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://i.postimg.cc/0y1PgLs7/linkedin-svgrepo-com-2.png"
                    alt="LinkedIn"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
