import React from "react";
import {
  ReviewContainer,
  UserAvatar,
  UserInfo,
  UserName,
  UserReview,
} from "./styled";

const UserReviewCard = ({ feedBackData = {} }) => {
  const { name = "", avatarSrc = "", review = "" } = feedBackData;

  const lengthChecker = (text) => {
    if (text?.length > 20) {
      return text.slice(0, 21) + ".....";
    } else {
      return text.slice(0, 21);
    }
  };

  return (
    <ReviewContainer className="col-4">
      <UserAvatar src={avatarSrc} alt="User Avatar" />
      <div>
        <UserInfo>
          <UserName>{name}</UserName>
        </UserInfo>
        <UserReview>{lengthChecker(review)}</UserReview>
      </div>
    </ReviewContainer>
  );
};

export default UserReviewCard;
