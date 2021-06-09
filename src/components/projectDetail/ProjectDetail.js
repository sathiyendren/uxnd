/* eslint-disable react/prop-types */
import React from "react";
import "./ProjectDetail.css";
import HorizontalLayout from "./HorizontalLayout";
import VerticalLayout from "./VerticalLayout";

export default function ProjectDetail({ details }) {
  return (
    <div className="projectDetail main" id="projectDetail">
      <div className="projectDetail-title-main">
        {details.title && (
          <h5 className="projectDetail-title">{details.title}</h5>
        )}
        {details.subTitle && (
          <h2 className="projectDetail-subTitle">{details.subTitle}</h2>
        )}
      </div>
      {details.content &&
        details.content.map((contentItem, index) => (
          <div key={index}>
            {contentItem.layout === "horizontal" && (
              <HorizontalLayout content={contentItem} />
            )}
            {contentItem.layout === "vertical" && (
              <VerticalLayout content={contentItem} />
            )}
          </div>
        ))}
    </div>
  );
}
