import React from "react";
import {
  CTAButton,
  GradientOverlay,
  LandingPageContainer,
  LandingSection,
  TagLine,
  TaglineCtaText,
  TaglineText,
  TaglineTextSecoundary,
  ZoomBackgroundImage,
} from "./styled";

export const LandingPage = () => {
  return (
    <LandingPageContainer className="col-12">
      <LandingSection className="col-12 img-fluid">
        <ZoomBackgroundImage />
        <GradientOverlay />
        <TagLine className="col-6">
          <TaglineText>Building Dreams, Crafting Spaces</TaglineText>
          <TaglineTextSecoundary>
            Your Trusted Construction Partner!
          </TaglineTextSecoundary>
          <CTAButton alternativeColor={true}>Contact us!</CTAButton>
          <CTAButton>Get Construction Deals</CTAButton>
        </TagLine>
      </LandingSection>
    </LandingPageContainer>
  );
};
