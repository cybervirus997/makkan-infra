import React from "react";
import { GradientOverlay, ListContainer, WhatWeDoConatiner } from "./styled";
import { WorkList } from "./work-list";

export const WhatWeDoPage = () => {
  const data = [
    {
      iconType: 0,
      title: "Quality Products",
      description:
        "By quality here we describe not just our quality of work; we use the best products from reliable brands and dealers to build a robust design throughout.",
    },
    {
      iconType: 1,
      title: "Timely Delivery",
      description:
        "  We know how essential time is for all of us. We promise and give plans with strict deadlines.",
    },
    {
      iconType: 2,
      title: "Competitive Pricing",
      description:
        "Our plans have the right resources and materials, plus we also provide the best price to carry out big construction projects.",
    },
  ];

  return (
    <WhatWeDoConatiner className="col-12 d-flex img-fluid">
      <GradientOverlay />
      <ListContainer className="col-12 d-flex">
        <WorkList propsData={data[0]} />
        <WorkList propsData={data[1]} />
        <WorkList propsData={data[2]} />
      </ListContainer>
    </WhatWeDoConatiner>
  );
};
