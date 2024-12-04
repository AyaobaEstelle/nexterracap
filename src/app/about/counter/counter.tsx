import Counter from "./page";
import styles from "./counter.module.css";

const Counters = () => {
  return (
    <div className={styles.container}>
      <hr className={styles.horizontalLine} />
      <div className={styles.countersWrapper}>
        <Counter start={0} end={30} text="Advisors Network" />
        <hr className={styles.verticalLine} />
        <Counter start={0} end={9} text="Support Groups" />
      </div>
      <hr className={styles.horizontalLine} />
    </div>
  );
};

export default Counters;
