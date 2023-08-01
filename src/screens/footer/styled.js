import { keyframes, styled } from "styled-components";

export const FooterContainer = styled.footer`
  position: relative;
  background: linear-gradient(to left, #222831, #00adb5);
  color: #ffffff;
  padding: 40px 0;
`;

export const TextGroupBox = styled.footer`
  dispaly: flex;
  flex-direction: column;
`;

export const FooterContent = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-left: 10%;
  margin-right: 10%;
`;

export const FooterContact = styled.div`
  flex: 1;
  margin-left: 40px;

  h4 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
  }
`;

export const FooterIcons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

export const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #222831, #00adb5);
  opacity: 0.7;
  z-index: -1;
  background-size: 200% 100%;
  background-position: 0 0;
`;

export const IconWrapper = styled.span`
  font-size: 24px;
  color: white;
  display: flex;
  align-items: center;
  transition: color 0.2s ease;

  &:hover {
    color: ${(props) => props.hoverColor || props.iconColor || "white"};
    transform: scale(2);
  }
`;

export const flowingAnimation = keyframes`
  0% {
    text-shadow: 0 0 0 rgba(255, 255, 255, 0.8);
  }
  100% {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  }
`;

export const GlowingText = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: white;
  animation: ${flowingAnimation} 2s linear infinite alternate;
`;

export const GlowingTextSecoundary = styled.div`
  font-size: 10px;
  color: white;
  animation: ${flowingAnimation} 2s linear infinite alternate;
`;
