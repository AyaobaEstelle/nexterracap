"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Footer from "../home/Footer/page";
import NewsletterForm from "./form/page";

export default function Newsletter() {
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
        <h2>Newsletter</h2>
        <div className={styles.textContent}>
          <p>
            If you&rsquo;re looking to stay up-to-date on the latest news, and
            exciting updates about us, we invite you to sign up for our
            newsletter below. Our newsletter is the perfect way to keep in touch
            with us and never miss out on the latest and greatest information.
          </p>
          <p>
            As a subscriber, you&rsquo;ll receive timely and relevant
            information about Nexterra Capital, delivered straight to your
            inbox. Nexterra Capital Newsletter is a great way to stay connected
            with us and never miss out on anything important. We promise to keep
            you informed, without overwhelming your inbox.
          </p>

          <p>We look forward to welcoming you to the community.</p>
        </div>

        <h3>Subscribe below to get the latest news and Updates.</h3>
        <NewsletterForm />
      </div>
      <Footer />
    </div>
  );
}
