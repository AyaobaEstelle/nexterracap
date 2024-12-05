import Button from "../Button/page";
import styles from "./styles.module.css";

const InvestmentItems = () => {
  return (
    <div className={styles.container}>
      <hr />
      <div className={styles.content}>
        <div className={styles.investmentItem}>
          <h2 className={styles.heading}>Our Investment Areas</h2>
          <p className={styles.description}>
            We align our investment focus areas with the United Nations
            Sustainable Development Goals (UNSDG 1,2,5,7,8,10,12,13). Through
            these impact indicators, we aim to track the progress of each
            investment, ensuring our portfolio companies contribute to economic
            development, climate change mitigation and adaptation, and gender
            equality.
          </p>
          <div className={styles.card}>
            <h2 className={styles.cardHeading}>
              Tech-Enabled SMEs (Seed-Post Seed)
            </h2>
            <ul className={styles.cardItems}>
              <li>Financial Inclusion / FinTech</li>
              <li>AgTech/ Food Tech​</li>
              <li>Healthcare</li>
              <li>Climate A&R</li>
              <li>Supply Chain</li>
              <li>Mobility</li>
              <li>Logistics</li>
              <li>Energy / Efficiency</li>
              <li>Renewables</li>
            </ul>
          </div>
        </div>

        <div className={styles.investmentItem}>
          <h2 className={styles.heading}>Criteria</h2>
          <p className={styles.description}>
            Before we get into the nitty gritty, We only invest in socially
            conscious businesses. A socially conscious business, is an
            enterprise that prioritize both their customers,
            social/environmental responsibility. These businesses aim for
            positive impact, profits, and align with our focus on rapid
            expansion and value creation in the small to lower mid-market,
            particularly targeting industries in need of change.
          </p>
          <p className={styles.descriptionText}>
            We integrate ESG factors throughout our investment process to
            promote sustainable growth, risk management, and positive community
            imp
          </p>
          <div className={styles.card}>
            <h2 className={styles.cardHeading}>Other criteria include:</h2>
            <ul className={styles.cardItems}>
              <li>Minimum investment round size of $3m</li>
              <li>MRR of at least $300-500k</li>
              <li>Diverse team & excellent management execution</li>
              <li>Community minded</li>
              <li>Clear path to M&A</li>
              <li>Alignment with "ESG-UNSDG Impact" factors:</li>
            </ul>
          </div>
        </div>
      </div>
      <button className={styles.button}>
        <a href="#">
          <Button text="Learn More" />
        </a>
      </button>
    </div>
  );
};

export default InvestmentItems;
