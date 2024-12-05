import React from "react";
import Hero from "./Hero/hero";
import People from "./People/people";
import Diverse from "./Diverse/diverse";
import Why from "./Why/why";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";

export default function About() {
  return (
    <div>
      <Header />
      <Hero />
      <People />
      <Diverse />
      <Why />
      <Footer />
    </div>
  );
}
