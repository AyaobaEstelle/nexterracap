import styles from "./styles.module.css";

const Opportunity = () => {
  return (
    <div className={styles.opportunity}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>The Opportunity</h1>
        </header>

        <div className={styles.grid}>
          <div className={styles.item}>
            <h2>$4 trillion</h2>
            <small>
              Investors are leaving more than $4 trillion on the table by not
              investing in a wider network of founders. (HBR)
            </small>
          </div>
          <div className={styles.item}>
            <h2>$3.1 trillion</h2>
            <small>
              As of 2023, the GDP of Africa was estimated at roughly 3.1
              trillion U.S. dollars.
            </small>
          </div>
          <div className={styles.item}>
            <h2>$50 billion</h2>
            <small>
              Revenue earned by African fintech startups is expected to grow 13X
              and top 50B by 2030, the fastest rate by any region
            </small>
          </div>
          <div className={styles.item}>
            <h2>$1 trillion</h2>
            <small>
              The African internet economy is expected to reach $1 trillion by
              2025. This means that there is a growing market for digital
              products and services in Africa.
            </small>
          </div>
          <div className={styles.item}>
            <h2>2.5 billion</h2>
            <small>
              The African population is expected to grow to 2.5 billion by 2050.
              This means that there will be a growing demand for food in Africa.
            </small>
          </div>
          <div className={styles.item}>
            <h2>46% CAGR</h2>
            <small>
              CAGR of 46% in funding volume since 2018: a 4.5x multiple over
              four years. (Partech)
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opportunity;
