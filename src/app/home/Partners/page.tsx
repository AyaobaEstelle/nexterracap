import styles from "./styles.module.css";
import Image from "next/image";

export default function Partners() {
  return (
    <div className={styles.partners}>
      <div className={styles.content}>
        <h1>Ecosystem Partners</h1>
        <p>
          Nexterra has teamed up with fellow VCs, angel syndicates, alternative
          sources of capital, and other organizations to provide founders with
          more value.
        </p>
        <div className={styles.scrollContainer}>
          <div className={styles.carouselPrimary}>
            <img src="https://i.postimg.cc/yNr0P4Df/hub.png" alt="" />
            <img src="https://i.postimg.cc/QMMp1xd9/fresh.png" alt="" />
            <img src="https://i.postimg.cc/x15vXbnV/notion.png" alt="" />
          </div>
          <div
            className={`${styles.carouselPrimary} ${styles.carouselSecondary}`}
          >
            <img src="https://i.postimg.cc/kgqNMyry/drop.webp" alt="" />
            <img src="https://i.postimg.cc/PrmzkR7x/aws.png" alt="" />
            <img src="https://i.postimg.cc/RVrQyBXy/zendex.png" alt="" />
          </div>
        </div>
      </div>
      <div className={styles.newsletter}>
        <h1>Nexterra Newsletter</h1>
        <button>
          <a href="#">subscribe</a>
        </button>
      </div>
    </div>
  );
}
