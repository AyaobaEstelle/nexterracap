import { useEffect, useState } from "react";
import styles from "./counter.module.css";

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

export default Counter;
