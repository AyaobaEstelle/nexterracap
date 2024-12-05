import React from "react";
import Hero from "./Hero/hero";
import People from "./People/people";
import Diverse from "./Diverse/diverse";
import Why from "./Why/why";
import Footer from "../home/Footer/footer";

export default function About() {
  return (
    <div>
      <Hero />
      <People />
      <Diverse />
      <Why />
      <Footer />
    </div>
  );
}
