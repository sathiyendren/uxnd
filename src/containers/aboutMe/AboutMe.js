/* eslint-disable react/prop-types */
import React from "react";
import { Fade } from "react-reveal";
import "./AboutMe.css";

export default function AboutMe(props) {
  const content = props?.data?.content;
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="aboutMe-main" id="aboutMe">
        <div className="aboutMe-main">
          <div className="aboutMe-image-div">
            <img alt="man sitting on table" src={props?.data?.imageURL}></img>
          </div>
          <div className="aboutMe-text-div">
            <div>
              {props.title && (
                <h1 className={"aboutMe-title-text"}>{props.title}</h1>
              )}
              {content &&
                content.map((contentItem, index) => (
                  <div key={index} className={"aboutMe-text-p"}>
                    {contentItem}{" "}
                  </div>
                ))}
            </div>
            <div>
              <button
                className={"resume-btn"}
                onClick={() => {
                  window.open(props?.data?.resumeLink, "_blank");
                }}
              >
                View my resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
