import React from "react";
import { Navbar } from "../../components/Navbar";
import { LandingPage } from "../landingpage";
import { WhatWeDoPage } from "../what-we-do";
import { WhyUsPage } from "../why-us";

export const HomePage = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <WhatWeDoPage />
      <WhyUsPage />
    </div>
  );
};
