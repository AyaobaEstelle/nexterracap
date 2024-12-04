"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Footer from "../home/Footer/page";

export default function Strategy() {
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
                    <a href="/" className={styles.dropdownLink}>
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
            I<span>nvestment strategy</span>
          </h1>
          <div className={styles.heroSubtitle}>
            <h3>
              Our Name, <span>nexterra</span> merges two words with significant
              meanings:
            </h3>
            <p className={styles.listItems}>
              Next
              <span> - symbolizes progress, development, and discovery.</span>
            </p>
            <p className={styles.listItems}>
              Terra
              <span>
                &nbsp;- Latin word meaning &ldquo;land&rdquo; or
                &ldquo;earth&rdquo; particularly in relation to Africa.
              </span>
            </p>
            <div className={styles.subtitleText}>
              <p>
                Together, these words encapsulate our mission of fostering
                sustainable investments for Africa&rsquo;s future. We aim to
                identify and invest in seed and post-seed stage tech-enabled
                companies that have a positive impact on humanity.
              </p>
              <p>
                Join a community committed to making a positive impact while
                pursuing financial success. Together, we can unlock the vast
                untapped potential of African startups and contribute to a
                brighter future for the continent.
              </p>
            </div>
          </div>
          <button>
            <a href="#">Invest with us</a>
          </button>
        </div>
      </div>
      <div className={styles.invest}>
        <p>When you invest with Nexterra Capital, you invest in:</p>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <ul className={styles.cardItems}>
              <li>Commitment to Value Creation</li>
              <li>Operational Excellence​</li>
              <li>Diverse Team and Network​</li>
              <li>Strong Network</li>
            </ul>
          </div>
          <div className={styles.card}>
            <ul className={styles.cardItems}>
              <li>Sustainable Impact</li>
              <li>Proven Track Record​</li>
              <li>Deep Market Understanding</li>
              <li>The Next Generation</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.strategy}>
        <h1>Our Enhancement Strategy</h1>
        <div className={styles.strategyContainerWrapper}>
          <div className={styles.strategyContainer}>
            <h2>Targeted Sector Diversification​</h2>
            <p>
              ​ Diversification across select sectors to reduce concentration
              risk and potential exposure to adverse economic conditions in any
              single sector. With emphasis on climate-resiliency integration for
              positive impact
            </p>
          </div>
          <div className={styles.strategyContainer}>
            <h2>Value-Added Support & Capacity Building​</h2>
            <p>
              Comprehensive value-add & capacity-building programs to portfolio
              companies, providing them with essential guidance, expertise, and
              resources to strengthen their operations and enhance their chances
              of success
            </p>
          </div>
          <div className={styles.strategyContainer}>
            <h2>Impact Measurement & ESG Integration​</h2>
            <p>
              Rigorous impact measurement framework that evaluates ESG
              performance of companies. Investments will be aligned with
              sustainable practices, promoting positive social and environmental
              impact.
            </p>
          </div>
          <div className={styles.strategyContainer}>
            <h2>Local Co-Investment and Risk Sharing​</h2>
            <p>
              Co-investment with reputable local investors and FIs. This
              risk-sharing approach will leverage local knowledge and resources,
              enhancing the overall investment ecosystem's stability and
              sustainability.
            </p>
          </div>
        </div>
      </div>
      <hr className={styles.divider} />
      <div className={styles.funds}>
        <button>
          <a href="">Go to Nexterra Syndicate Funds</a>
        </button>
      </div>
      <Footer />
    </div>
  );
}
