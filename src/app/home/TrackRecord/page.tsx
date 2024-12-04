"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import Counters from "../TrackCounter/counter";

const TrackRecords = () => {
  const logos = [
    "/logos/GrowAgric.png",
    "/logos/t40.png",
    "/logos/lab.png",
    "/logos/TradeLenda.png",
    "/logos/quizac.png",
    "/logos/loose-change.png",
    "/logos/SolarFi.png",
    "/logos/axologo.png",
    "/logos/onefarm.png",
    "/logos/Aquafarm.png",
    "/logos/a-trader.png",
    "/logos/Echoboo.png",
  ];

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <small>Some of our</small>
        <h1>Track Record</h1>
        <p>
          Nexterra GP boasts a proven track record of catalyzing company growth.
          Our renowned asynchronous accelerator, &lsquo;LabEight Africa &rsquo;,
          and our expertise in successful fundraise initiatives with the
          Syndicate Fund have earned us a reputation for driving exceptional
          outcomes. We leverage our deep experience to propel companies forward
          and unlock their true potential.
        </p>
        <div className={styles.teamCounter}>
          <Counters />
        </div>
        <button>
          <a href="#" className={styles.button}>
            Learn more
          </a>
        </button>
      </div>
      <div className={styles.carouselContainer}>
        <div className={styles.carousel}></div>
        <div className={styles.carousel}>
          {logos.map((logo, index) => (
            <div key={index} className={styles.logoWrapper}>
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                width={200}
                height={200}
                className={styles.logo}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrackRecords;
