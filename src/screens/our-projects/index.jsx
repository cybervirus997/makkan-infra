import React from "react";
import {
  GradientOverlay,
  OurProjectMainContainer,
  ScrollContainer,
} from "./styled";
import { ProjectsList } from "./projects";

export const OurProjectsPage = () => {
  const projectList = [
    { title: "okay", image: "", description: "" },
    { title: "okay", image: "", description: "" },
    { title: "okay", image: "", description: "" },
  ];

  return (
    <OurProjectMainContainer>
      <GradientOverlay />
      OurProjectsPage
      <ScrollContainer>
        <ProjectsList listData={projectList[0]} />
        <ProjectsList listData={projectList[0]} />
        <ProjectsList listData={projectList[0]} />
        <ProjectsList listData={projectList[0]} />
        <ProjectsList listData={projectList[0]} />
        <ProjectsList listData={projectList[0]} />
        <ProjectsList listData={projectList[0]} />
      </ScrollContainer>
    </OurProjectMainContainer>
  );
};
