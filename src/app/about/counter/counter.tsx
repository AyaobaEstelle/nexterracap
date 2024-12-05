"use client";

import styles from "./counter.module.css";
import { useEffect, useState } from "react";

interface CounterProps {
  start: number;
  end: number;
  text: string;
}

const Counter = ({ start, end, text }: CounterProps) => {
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
    }, 30);

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
        <Counter start={0} end={30} text="Advisors Network" />
        <hr className={styles.verticalLine} />
        <Counter start={0} end={9} text="Support Groups" />
      </div>
      <hr className={styles.horizontalLine} />
    </div>
  );
};

export default Counters;
