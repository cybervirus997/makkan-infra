import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegram,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import {
  FooterContact,
  FooterContainer,
  FooterContent,
  FooterIcons,
  GlowingText,
  GlowingTextSecoundary,
  GradientOverlay,
  IconWrapper,
  TextGroupBox,
} from "./styled";

export default function PremiumFooter() {
  return (
    <FooterContainer>
      <FooterContent>
        <TextGroupBox>
          <GlowingText>Makkan Infra </GlowingText>
          <GlowingTextSecoundary>
            © Copyright 2023 Makkan infra. All Rights Reserved.
          </GlowingTextSecoundary>
        </TextGroupBox>
        <FooterContact>
          <h4>Contact Us</h4>
          <p>Email: info@example.com</p>
          <p>Phone: +1 123-456-7890</p>
        </FooterContact>
        <FooterIcons>
          <IconWrapper iconColor="#3b5998" hoverColor="#4267B2">
            <FaFacebookF />
          </IconWrapper>
          <IconWrapper iconColor="#e4405f" hoverColor="#C13584">
            <FaInstagram />
          </IconWrapper>
          <IconWrapper iconColor="#0088cc" hoverColor="#00acee">
            <FaTelegram />
          </IconWrapper>
          <IconWrapper iconColor="#128c7e" hoverColor="#0e6251">
            <FaPhoneAlt />
          </IconWrapper>
          <IconWrapper iconColor="#008000" hoverColor="#218838">
            <FaMapMarkerAlt />
          </IconWrapper>
        </FooterIcons>
      </FooterContent>
      <GradientOverlay />
    </FooterContainer>
  );
}
