import React from "react";
import Hero from "./Hero/page";
import People from "./People/page";
import Diverse from "./Diverse/page";
import Why from "./Why/page";
import Footer from "../home/Footer/page";

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
