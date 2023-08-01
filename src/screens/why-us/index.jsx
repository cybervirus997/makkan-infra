import React from "react";
import {
  FeedbackTextHeader,
  GradientOverlay,
  StrongDescriptionText,
  StrongHeaderText,
  UserReviewContainer,
  WhyUsMainContainer,
  WhyUsPageContainer,
  ZoomBackgroundImage,
  ZoomBackgroundImage1,
  ZoomBackgroundImage2,
  ZoomBackgroundImage3,
} from "./styled";
import UserReviewCard from "./user-review";

export const WhyUsPage = () => {
  const userFeedBackData = [
    {
      name: "Utkarsh Arya",
      avatarSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjtzlWXLfsEbQ8wbVvDk0UjezUhl9Po8ez2w&usqp=CAU",
      review: "really enjoyed the services",
    },
    {
      name: "Shubh",
      avatarSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLQrz2xfIOr9RPPE2KmHfEqzkYYieIYQe10g&usqp=CAU",
      review: "great work",
    },
    {
      name: "Venkrtasgerwar",
      avatarSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQILtYC9nBJA06pJsDYGzpHP-3hc91HQNS6HQ&usqp=CAU",
      review: "recommended",
    },
  ];

  return (
    <WhyUsPageContainer className="col-12">
      <ZoomBackgroundImage />
      <ZoomBackgroundImage1 />
      <ZoomBackgroundImage2 />
      <ZoomBackgroundImage3 />
      <GradientOverlay />
      <WhyUsMainContainer>
        <StrongHeaderText>Why Us ?</StrongHeaderText>
        <StrongDescriptionText>
          Welcome to the realm of exceptional construction services in Bargarh,
          Odisha. With an unwavering passion for building dreams, we've earned a
          stellar reputation for reliability, top-notch quality, and unwavering
          trust. From envisioning breathtaking homes to crafting dynamic
          commercial spaces, our skilled team brings your aspirations to life
          with personalized solutions tailored to your needs and budget. As we
          expand our horizons, our commitment to excellence remains steadfast,
          making us the ideal partner for a seamless and rewarding construction
          journey. Embrace the experience and embark on a transformative path
          with us to build a brighter future together.
        </StrongDescriptionText>
        <FeedbackTextHeader>our user's feedback</FeedbackTextHeader>
        <UserReviewContainer className="col-12 ">
          <UserReviewCard feedBackData={userFeedBackData[0]} />
          <UserReviewCard feedBackData={userFeedBackData[1]} />
          <UserReviewCard feedBackData={userFeedBackData[2]} />
        </UserReviewContainer>
      </WhyUsMainContainer>
    </WhyUsPageContainer>
  );
};
