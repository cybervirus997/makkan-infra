import React from "react";
import { Navbar } from "../../components/Navbar";
import { LandingPage } from "../landingpage";
import { WhatWeDoPage } from "../what-we-do";
import { WhyUsPage } from "../why-us";
import PremiumFooter from "../footer";
import { OurProjectsPage } from "../our-projects";

export const HomePage = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <WhatWeDoPage />
      <WhyUsPage />
      <OurProjectsPage />
      <PremiumFooter />
    </div>
  );
};
