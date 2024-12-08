"use client";
import styles from "./styles.module.css";
import Counters from "../TrackCounter/counter";

const TrackRecords = () => {
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
        <div className={styles.counterButton}>
          <button>
            <a href="#" className={styles.button}>
              Learn more
            </a>
          </button>
        </div>
      </div>
      <div className={styles.carouselContainer}>
        <div className={styles.carousel}>
          <a
            href="https://growagric.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://i.postimg.cc/SRb2TykG/Grow-Agric.png"
              alt="Grow Agric"
            />
          </a>
          <a
            href="https://myt40.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://i.postimg.cc/JhgBXNFv/t40.png" alt="T40" />
          </a>
          <a
            href="https://labeight.tech/t4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://i.postimg.cc/50CQSHd0/lab.png" alt="Lab" />
          </a>
          <a
            href="https://tradelenda.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://i.postimg.cc/pdyFyGsK/Trade-Lenda.png"
              alt="Trade Lenda"
            />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <img src="https://i.postimg.cc/RZgtS5LM/quizac.png" alt="Quizac" />
          </a>
          <a
            href="https://www.getloosechange.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://i.postimg.cc/bwybfNbC/loose-change.png"
              alt="Loose Change"
            />
          </a>
          <a
            href="https://solar-fi.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://i.postimg.cc/TYqmsWy5/SolarFi.png"
              alt="SolarFi"
            />
          </a>
          <a
            href="https://axocheck.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://i.postimg.cc/CLVkJ4KV/axologo.png"
              alt="Axologo"
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src="https://i.postimg.cc/cHpYpRMw/onefarm.png"
              alt="OneFarm"
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src="https://i.postimg.cc/bYn1Q5pT/Aquafarm.png"
              alt="AquaFarm"
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src="https://i.postimg.cc/Bb2D4jMy/a-trader.png"
              alt="A Trader"
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src="https://i.postimg.cc/k46KY187/Echoboo.png"
              alt="Echoboo"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TrackRecords;
