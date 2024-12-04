import React from "react";
import Hero from "./Hero/page";
import Team from "./Team/page";
import InvestmentItems from "./Investment/page";
import Opportunity from "./Oppurtunity/page";
import TrackRecords from "./TrackRecord/page";
import Partners from "./Partners/page";
import Footer from "./Footer/page";

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
