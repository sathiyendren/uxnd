/* eslint-disable react/prop-types */
import React from "react";
import "./HorizontalLayout.css";

export default function HorizontalLayout({ content }) {
  return (
    <div className="horizontalLayout-content-main">
      {content.imageSide === "left" && (
        <>
          {content.imageURL && (
            <div
              className={
                content.imageSize
                  ? `horizontalLayout-image-div ${content.imageSize}`
                  : "horizontalLayout-image-div"
              }
            >
              <img alt="man sitting on table" src={content.imageURL}></img>
            </div>
          )}
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
                    <RenderHTML HTML={paracontent.content}></RenderHTML>
                  </div>
                </div>
              ))}
          </div>
        </>
      )}
      {(content.imageSide === "right" || !content.imageSide) && (
        <>
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
                    <RenderHTML HTML={paracontent.content}></RenderHTML>
                  </div>
                </div>
              ))}
          </div>
          {content.imageURL && (
            <div
              className={
                content.imageSize
                  ? `horizontalLayout-image-div ${content.imageSize}`
                  : "horizontalLayout-image-div"
              }
            >
              <img alt="man sitting on table" src={content.imageURL}></img>
            </div>
          )}
        </>
      )}
    </div>
  );
}

const RenderHTML = (props) => (
  <div dangerouslySetInnerHTML={{ __html: props.HTML }}></div>
);
