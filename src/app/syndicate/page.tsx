import styles from "./styles.module.css";
import Footer from "@/components/Footer/footer";
import Header from "@/components/Header/header";

export default function Syndicate() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            D<span>eal by deal syndicate investments</span>
          </h1>
          <div className={styles.heroSubtitle}>
            <p>
              Our Syndicate investments is a collaborative investment approach
              that brings together a network of strategic partners and
              investors. This strategy provides a platform for pooling
              resources, expertise, and capital to support promising startups.
              With a focus on tech and tech-enabled businesses across various
              sectors, including fintech, climate, health, and agriculture, we
              leverage our deep market knowledge and extensive network to
              identify high-potential investment opportunities.
            </p>
            <p>
              Through our Syndicate investments, we strive to drive sustainable
              growth, create meaningful impact, and deliver attractive returns
              to our investors.
            </p>
          </div>
        </div>
        <div className={styles.button}>
          <button>
            <a href="https://venture.angellist.com/nexterra/syndicate">
              Join the Syndicate
            </a>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
