/* eslint-disable react/prop-types */
import React from "react";
import { Fade } from "react-reveal";
import "./IAmGoodAt.css";

export default function IAmGoodAt(props) {
  const content = props?.data?.content;
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="iAmGoodAt-main" id="iAmGoodAt">
        <div className="iAmGoodAt-main">
          <div className="iAmGoodAt-image-div">
            <img alt="man sitting on table" src={props?.data?.imageURL}></img>
          </div>
          <div className="iAmGoodAt-text-div">
            <div>
              {props.title && (
                <h1 className={"iAmGoodAt-title-text"}>{props?.title}</h1>
              )}
              <div className="iAmGoodAt-text-content-container">
                {content &&
                  content.map((contentItem, index) => (
                    <div key={index} className={"iAmGoodAt-text-content"}>
                      {contentItem?.skills &&
                        contentItem?.skills.map((skill, index) => (
                          <div key={index} className={"iAmGoodAt-text-skill"}>
                            <h4>{skill?.title}</h4>
                            {skill.content &&
                              skill.content.map((skillText, index) => (
                                <p key={index} className={"iAmGoodAt-text-p"}>
                                  {skillText}
                                </p>
                              ))}
                          </div>
                        ))}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
