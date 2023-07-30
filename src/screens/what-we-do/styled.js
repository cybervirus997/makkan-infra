import styled from "styled-components";

export const WhatWeDoConatiner = styled.div`
  position: relative;
  background-color: #222831;
  height: 49vh;
  // background-image: url("https://github.com/cybervirus997/makkan-infra/assets/72969348/8f1e2545-07b5-4a2d-bbdf-6367bb51a68d");
  background-size: cover;
  background-position: center;
  overflow: hidden;
`;

export const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 40%, transparent 70%);
  z-index: 1;
  pointer-events: none;
`;

export const ListContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90%;
  margin-top: 60px;
  z-index: 4;
  pointer-events: none;
  padding: 10px;
`;

export const FeatureDiv = styled.div`
  text-align: center;
  background-color: transparent;
  padding: 20px;
  border-radius: 8px;
`;

export const FeatureIcon = styled.div`
  font-size: 48px;
  margin-bottom: 10px;
  color: white;
`;

export const FeatureTitle = styled.h3`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #ffffff;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
`;

export const FeatureDescription = styled.p`
  font-size: 15px;
  color: #999fa2;
`;
