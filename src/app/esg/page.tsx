"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";

export default function Esg() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.text}>
        <div className={styles.textHeader}>
          <h1>ESG</h1>
          <p>
            Nexterra applies the best practices of responsible investment with
            an ESG-integrated approach, encouraging its stakeholders to give
            greater importance to ESG issues.{" "}
          </p>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.textItem}>
            <a href="https://drive.google.com/file/d/18IjOw48KXQ_DVKha6kg2vdIf1aHU7tgH/view?usp=drive_link">
              Nexterra-SFDR Product Disclosures
            </a>
            <hr />
          </div>
          <div className={styles.textItem}>
            <a href="https://drive.google.com/file/d/1p8_sI9rp47PD9SfOkubQfuFttVjWiSTF/view?usp=drive_link">
              NEXTERRA-SFDR Entity level disclosures
            </a>
            <hr />
          </div>
        </div>
        <div className={styles.textItem}>
          <a href="https://nexterra.notion.site/FrameWork-398fc74e428948c4acf620133bcb3017">
            ESG FrameWork
          </a>
          <hr />
        </div>
        <div className={styles.textContent}>
          <h1>Ethos</h1>
          <p>
            Environmental, social and governance and impact (ESGI)
            considerations are a fundamental part of this commitment. Our ESGI
            strategy is deeply rooted in Nexterra&#8217;s DNA, and aims to go
            beyond ESG to maximize positive impact for the communities. Our
            impact approach focuses on improving the sustainability of
            operations and job quality and diversity in every portfolio company.
            We infuse a culture of strong ESG responsibility, so that the ESG
            commitment lives on well beyond our investment.
          </p>
        </div>
        <div className={styles.textContentItem}>
          <div className={styles.contentItems}>
            <div className={styles.contentItem}>
              <h3>Sustainability</h3>
              <p>
                Our approach to sustainability unlocks scale, impact, and
                longevity for well-run businesses. We aim to deliver positive
                outcomes and more resilient returns by taking action to improve
                the well-being and long-term prospects of people and the planet.
              </p>
              <p>
                Nexterra applies the best practices of responsible investment
                and leads with an ESG-integrated approach.
              </p>
              <p>
                Within Nexterra govern our environmental and social management
                system (ESMS), which builds on the IFC&#8217;s Sustainability
                Framework to provide insights to inform responsible investment
                decision-making, reporting and risk mitigation throughout the
                investment cycle.
              </p>
              <p>
                We aim to consciously deploy capital to maximise and analyse the
                value and impact our work brings to economies, people and the
                planet.
              </p>
              <p>
                We welcome the EU regulation on sustainability-related
                discourses in the financial services sector (SFDR) as a
                truecatalyst driving the integration of ESG risks into the
                investment decisions.
              </p>
              <p>
                Nexterra Capital Fund I is classified as an Article 8 under
                SFDR, and we continue to advocate and embed ESG into our
                mission.
              </p>
            </div>
            <div className={styles.contentItem}>
              <h3>Impact Strategy</h3>
              <p>
                At Nexterra, we invest with purpose. We actively seek
                opportunities that create meaningful impact in crucial areas
                such as gender equality, job creation, and climate action. By
                doing so, we contribute to the achievement of the UN Sustainable
                Development Goals.
              </p>
              <p>
                To effectively address the development challenges and seize
                emerging opportunities, we will focus on key strategic areas:
                resilience, climate action, and inclusive economies. We closely
                monitor impact-oriented themes that align with the needs of the
                countries and companies we serve. Additionally, we track and
                report performance in line with the SDGs for every investment we
                make, ensuring transparency and accountability.
              </p>
              <p>Core Focus:</p>
              <p>Inclusion (2, 5, 10)</p>
              <p>Resilience (1, 8)</p>
              <p>Climate Action (7, 12, 13)</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
