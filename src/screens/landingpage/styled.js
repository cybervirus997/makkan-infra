import styled from "styled-components";

export const CustomButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const LandingSection = styled.section`
  position: relative;
  height: 80vh;
  display: flex;
  background-image: url("https://github.com/cybervirus997/makkan-infra/assets/72969348/cf15a393-9494-4b0d-8163-5075524a6c39");
  background-size: cover;
  background-position: center;
  overflow: hidden;
  flex-direction: column;
  background-color: #222831;
`;

export const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to left,
    rgba(0, 0, 0, 0.7) 30%,
    transparent 100%
  );
  z-index: 1;
  pointer-events: none;
`;

export const CTAButton = styled.button`
  position: relative;
  z-index: 2;
  padding: 15px 30px;
  margin-left: 30px;
  font-size: 15px;
  font-weight: bold;
  background-color: ${(props) =>
    props.alternativeColor ? "#222831" : "#ffffff"};
  color: ${(props) => (!props.alternativeColor ? "#222831" : "#ffffff")};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const TagLine = styled.div`
  position: relative;
  z-index: 2;
  padding: 15px 30px;
  cursor: pointer;
  align-self: flex-end;
  margin-top: 20vh;
`;

export const TaglineText = styled.h2`
  font-size: 50px;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
`;

export const TaglineTextSecoundary = styled.h2`
  font-size: 18px;
  color: #ffffff90;
  text-align: center;
  margin-bottom: 20px;
`;

export const ZoomBackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("https://github.com/cybervirus997/makkan-infra/assets/72969348/cf15a393-9494-4b0d-8163-5075524a6c39");
  background-size: cover;
  background-position: center;
  transform: scale(1);
  transition: transform 0.5s ease-in-out;

  ${LandingSection}:hover & {
    transform: scale(1.1);
  }
`;
