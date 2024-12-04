import styles from "./styles.module.css";
import InvestmentItems from "./pages/Investment/page";
import Opportunity from "./pages/Oppurtunity/page";
import TrackRecords from "./pages/TrackRecord/page";
import Partners from "./pages/Partners/page";
import Footer from "./pages/Footer/page";
import Hero from "./pages/Hero/page";
import Team from "./pages/Team/page";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Hero />
      <Team />
      <InvestmentItems />
      <Opportunity />
      <TrackRecords />
      <Partners />
      <Footer />
    </div>
  );
}
