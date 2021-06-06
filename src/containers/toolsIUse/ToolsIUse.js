/* eslint-disable react/prop-types */
import React from "react";
import { Fade } from "react-reveal";
import "./ToolsIUse.css";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import manOnTable from "../../assets/img/manOnTable.svg";

import { illustration } from "../../portfolio";

export default function ToolsIUse(props) {
  const content = props?.data?.content;
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="toolsIUse-main" id="toolsIUse">
        <div className="toolsIUse-main">
          <div className="toolsIUse-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img alt="man sitting on table" src={manOnTable}></img>
            )}
          </div>
          <div className="toolsIUse-text-div">
            <div>
              {props.title && (
                <h1 className={"toolsIUse-title-text"}>{props.title}</h1>
              )}
              {content &&
                content.map((contentItem, index) => (
                  <div key={index} className={"toolsIUse-text-p"}>
                    {contentItem}{" "}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
