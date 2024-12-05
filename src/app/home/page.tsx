import React from "react";
import Hero from "./Hero/hero";
import InvestmentItems from "./Investment/investment";
import Opportunity from "./Oppurtunity/opportunity";
import TrackRecords from "./TrackRecord/track-record";
import Partners from "./Partners/partner";
import Footer from "./Footer/footer";
import Team from "./Team/team";

export default function Home() {
  return (
    <div>
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
