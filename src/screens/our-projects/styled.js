import { styled } from "styled-components";

export const OurProjectMainContainer = styled.div`
  position: relative;
  background-color: #222831;
  height: 55vh;
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
  background: linear-gradient(to bottom, rgba(0, 2, 2, 1) 50%, transparent 70%);
  z-index: 1;
  pointer-events: none;
`;

export const ScrollContainer = styled.div`
  width: 100vw;
  overflow-x: auto;
  white-space: nowrap;
  display: flex;
  flex-direction: row;
  padding-left: 20px;
`;

export const WhatWeDoConatiner = styled.div``;
