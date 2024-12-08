import React from "react";
import Hero from "./Hero/hero";
import InvestmentItems from "./Investment/investment";
import Opportunity from "./Oppurtunity/opportunity";
import TrackRecords from "./TrackRecord/track-record";
import Partners from "./Partners/partner";
import Team from "./Team/team";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";

export default function Home() {
  return (
    <div>
      <Header />
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
