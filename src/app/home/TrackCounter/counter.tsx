"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

interface TrackCounterProps {
  target: number;
  label: string;
}

const TrackCounter: React.FC<TrackCounterProps> = ({ target, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < target) {
      const interval = setInterval(() => {
        setCount((prev) => Math.min(prev + 1, target));
      }, 50);
      return () => clearInterval(interval);
    }
  }, [count, target]);

  return (
    <div className={styles.counterContainer}>
      <hr className={styles.line} />
      <div className={styles.number}>{count}</div>
      <div className={styles.label}>{label}</div>
      <hr className={styles.line} />
    </div>
  );
};

const DualCounter = () => {
  return (
    <div className={styles.dualCounter}>
      <TrackCounter target={30} label="Companies Accelerated" />
      <TrackCounter target={150} label="Active co-investor Network" />
    </div>
  );
};

export default DualCounter;
