"use client";

import Counter from "./page";
import styles from "./counter.module.css";
const Counters = () => {
  return (
    <div className={styles.container}>
      <hr className={styles.horizontalLine} />
      <div className={styles.countersWrapper}>
        <Counter start={0} end={15} text="PortCos Scaled" />
        <hr className={styles.verticalLine} />
        <Counter start={0} end={8} text="PortCos Profitable" />
      </div>
      <hr className={styles.horizontalLine} />
    </div>
  );
};

export default Counters;
