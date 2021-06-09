/* eslint-disable react/prop-types */
import React from "react";
import "./HorizontalLayout.css";

export default function HorizontalLayout({ content }) {
  return (
    <div className="horizontalLayout-content-main">
      <div className="horizontalLayout-text-div">
        <h3 className={"horizontalLayout-content-title-text"}>
          {content.title}
        </h3>
        {content.paragraph &&
          content.paragraph.map((paracontent, paraIndex) => (
            <div key={paraIndex}>
              <div
                style={{ fontWeight: "bold" }}
                className={"horizontalLayout-content-title-text"}
              >
                {paracontent.title}
              </div>

              <div className={"horizontalLayout-content-text-p"}>
                {paracontent.content}
              </div>
            </div>
          ))}
      </div>
      {content.imageURL && (
        <div className="horizontalLayout-image-div">
          <img alt="man sitting on table" src={content.imageURL}></img>
        </div>
      )}
    </div>
  );
}
