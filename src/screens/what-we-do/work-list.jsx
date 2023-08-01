import React from "react";
import {
  FeatureDescription,
  FeatureDiv,
  FeatureIcon,
  FeatureTitle,
} from "./styled";
import { FaTruck, FaClock, FaDollarSign } from "react-icons/fa";

export const WorkList = ({ propsData = {} }) => {
  const { iconType = 0, title = "", description = "" } = propsData;

  return (
    <FeatureDiv className="col-4">
      <FeatureIcon>
        {iconType === 2 ? (
          <FaDollarSign />
        ) : iconType === 1 ? (
          <FaClock />
        ) : (
          <FaTruck />
        )}
      </FeatureIcon>
      <FeatureTitle>{title}</FeatureTitle>
      <FeatureDescription>{description}</FeatureDescription>
    </FeatureDiv>
  );
};
