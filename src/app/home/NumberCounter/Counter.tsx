"use client";
import { useEffect, useState } from "react";
import styles from "./counter.module.css";

interface HomeCounterProps {
  start: number;
  end: number;
  text: string;
}

const Counter = ({ start, end, text }: HomeCounterProps) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < end) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          return prevCount;
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, [end]);

  return (
    <div className={styles.counterRow}>
      <h1 className={styles.number}>{count}</h1>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

const Counters = () => {
  return (
    <div className={styles.container}>
      <hr className={styles.horizontalLine} />
      <div className={styles.countersWrapper}>
        <Counter start={0} end={15} text="Port. Cos. Scaled" />
        <hr className={styles.verticalLine} />
        <Counter start={0} end={8} text="Port. Cos. Profitable" />
      </div>
      <hr className={styles.horizontalLine} />
    </div>
  );
};

export default Counters;
