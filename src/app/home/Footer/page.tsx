import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.divider}></div>

      <div className={styles.textSection}>
        <small>
          Nexterra Capital is registered in the Republic of Ireland with Company
          Number 729238 and is authorized <br />
          and regulated by the Alternative Investment Fund Manager (AIFM -
          CBI00515696) and registered with
        </small>
        <div className={styles.policySection}>
          <a href="#">Privacy Policy </a>
          <p>|</p>
          <a href="#"> Disclaimer</a>
        </div>
        <Link href="https://nexterra.notion.site/Job-Board-943e196984f244f6a99654fad529ff48">
          <button className={styles.button}>Jobs</button>
        </Link>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.bottomSection}>
        <p>Copyright © 2024 Nexterra Capital</p>
        <h1>N</h1>
        <div className={styles.socialLinks}>
          <Link
            href="https://x.com/NexterraCapital"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://i.postimg.cc/dV92GcQB/twitter-square-logo-svgrepo-com.png"
              alt="Twitter"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/company/nexterra-capital/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://i.postimg.cc/0y1PgLs7/linkedin-svgrepo-com-2.png"
              alt="LinkedIn"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
