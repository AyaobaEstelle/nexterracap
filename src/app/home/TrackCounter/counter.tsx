import TrackCounter from "./page";
import styles from "./styles.module.css";

const DualCounter = () => {
  return (
    <div className={styles.dualCounter}>
      <TrackCounter target={30} label="Companies Accelerated" />
      <TrackCounter target={150} label="Active co-investor Network" />
    </div>
  );
};

export default DualCounter;
