import React from "react";

export const ProjectsList = ({ listData = {} }) => {
  const { title = "", image = "", description = "" } = listData;
  return (
    <div
      class="card col-3"
      style={{
        width: "18rem",
        zIndex: 10,
        marginLeft: 20,
        overflow: "hidden",
      }}
    >
      <img src={image} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{description}</p>
        {/* <a href="#" class="btn btn-primary">
          Go somewhere
        </a> */}
      </div>
    </div>
  );
};
