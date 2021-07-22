/* eslint-disable react/prop-types */
import React from "react";
import "./VerticalLayout.css";

export default function VerticalLayout({ content }) {
  return (
    <div className="verticalLayout-content-main">
      {(content.imageSide === "bottom" || !content.imageSide) && (
        <>
          <div className="verticalLayout-text-div">
            <h3 className={"verticalLayout-content-title-text"}>
              {content.title}
            </h3>
            {content.paragraph &&
              content.paragraph.map((paracontent, paraIndex) => (
                <div key={paraIndex}>
                  <div
                    style={{ fontWeight: "bold" }}
                    className={"verticalLayout-content-title-text"}
                  >
                    {paracontent.title}
                  </div>

                  <div className={"verticalLayout-content-text-p"}>
                    <RenderHTML HTML={paracontent.content}></RenderHTML>
                  </div>
                </div>
              ))}
          </div>
          {content.imageURL && (
            <div
              className={
                content.imageSize
                  ? `verticalLayout-image-div ${content.imageSize}`
                  : "verticalLayout-image-div"
              }
            >
              <img alt="man sitting on table" src={content.imageURL}></img>
            </div>
          )}
        </>
      )}

      {content.imageSide === "top" && (
        <>
          {content.imageURL && (
            <div
              className={
                content.imageSize
                  ? `verticalLayout-image-div ${content.imageSize}`
                  : "verticalLayout-image-div"
              }
            >
              <img alt="man sitting on table" src={content.imageURL}></img>
            </div>
          )}
          <div className="verticalLayout-text-div">
            <h3 className={"verticalLayout-content-title-text"}>
              {content.title}
            </h3>
            {content.paragraph &&
              content.paragraph.map((paracontent, paraIndex) => (
                <div key={paraIndex}>
                  <div
                    style={{ fontWeight: "bold" }}
                    className={"verticalLayout-content-title-text"}
                  >
                    {paracontent.title}
                  </div>
                  <div className={"verticalLayout-content-text-p"}>
                    <RenderHTML HTML={paracontent.content}></RenderHTML>
                  </div>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
}

const RenderHTML = (props) => (
  <div dangerouslySetInnerHTML={{ __html: props.HTML }}></div>
);
