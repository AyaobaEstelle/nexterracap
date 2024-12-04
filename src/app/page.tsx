import styles from "./styles.module.css";
import Page from "./home/page";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Page />
    </div>
  );
}
