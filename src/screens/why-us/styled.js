import { keyframes, styled } from "styled-components";

export const WhyUsPageContainer = styled.section`
  position: relative;
  background-color: #393e46;
  height: 80vh;
  display: flex;
  background-image: url("https://github.com/cybervirus997/makkan-infra/assets/72969348/08412adb-fc58-4805-9096-4073011f3da7");
  background-size: cover;
  background-position: center;
  overflow: hidden;
  flex-direction: column;
  background-color: #222831;
`;

export const ZoomBackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("https://github.com/cybervirus997/makkan-infra/assets/72969348/08412adb-fc58-4805-9096-4073011f3da7");
  background-size: cover;
  background-position: center;
  transform: scale(1);
  transition: transform 0.5s ease-in-out;
  border-radius: 10px;

  ${WhyUsPageContainer}:hover & {
    transform: scale(0.8) translatex(-10px);
  }
`;

export const ZoomBackgroundImage1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("https://github.com/cybervirus997/makkan-infra/assets/72969348/08412adb-fc58-4805-9096-4073011f3da7");
  background-size: cover;
  background-position: center;
  transform: scale(1);
  transition: transform 0.5s ease-in-out;
  border-radius: 10px;

  ${WhyUsPageContainer}:hover & {
    transform: scale(0.6) translatex(-29px);
  }
`;

export const ZoomBackgroundImage2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("https://github.com/cybervirus997/makkan-infra/assets/72969348/08412adb-fc58-4805-9096-4073011f3da7");
  background-size: cover;
  background-position: center;
  transform: scale(1);
  transition: transform 0.5s ease-in-out;
  border-radius: 10px;

  ${WhyUsPageContainer}:hover & {
    transform: scale(0.4) translatex(-64px);
  }
`;

export const ZoomBackgroundImage3 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("https://github.com/cybervirus997/makkan-infra/assets/72969348/08412adb-fc58-4805-9096-4073011f3da7");
  background-size: cover;
  background-position: center;
  transform: scale(1);
  transition: transform 0.5s ease-in-out;
  border-radius: 10px;

  ${WhyUsPageContainer}:hover & {
    transform: scale(0.3) translatex(-104px);
  }
`;

export const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7) 100%,
    transparent 100%
  );
  z-index: 1;
  pointer-events: none;
`;

export const WhyUsMainContainer = styled.div`
  position: absolute;
  top: 10%;
  left: 10%;
  width: 80%;
  height: 80%;
  padding-top: 2%;
  padding-left: 5%;
  padding-right: 5%;
  align-self: center;
  border-radius: 10px;
  z-index: 10;
  pointer-events: none;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;
  overflow: hidden;
`;

const glowAnimation = keyframes`
  0% {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }
  50% {
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.9);
  }
  100% {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }
`;

export const StrongHeaderText = styled.h1`
  font-size: 40px;
  font-weight: 900;
  color: #ffffff;
  text-align: center;
  margin-bottom: 40px;
  margin-top: 20px;
  animation: ${glowAnimation} 2s ease-in-out infinite;
`;

export const StrongDescriptionText = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  text-align: center;
`;

export const UserReviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const FeedbackTextHeader = styled.h1`
  font-size: 20px;
  font-weight: 900;
  color: rgb(200, 200, 200);
  text-align: center;
  margin-bottom: 40px;
  margin-top: 40px;
  animation: ${glowAnimation} 2s ease-in-out infinite;
`;

export const ReviewContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const UserAvatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const UserName = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  margin: 0;
  margin-bottom: 4px;
`;

export const UserReview = styled.p`
  font-size: 16px;
  color: rgb(104, 104, 104);
`;
