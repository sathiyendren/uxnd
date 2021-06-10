/* eslint-disable react/prop-types */
import React from "react";
import { Fade } from "react-reveal";
import "./IAmGoodAt.css";
import manOnTable from "../../assets/img/manOnTable.svg";

export default function IAmGoodAt(props) {
  const content = props?.data?.content;
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="iAmGoodAt-main" id="iAmGoodAt">
        <div className="iAmGoodAt-main">
          <div className="iAmGoodAt-image-div">
            <img alt="man sitting on table" src={manOnTable}></img>
          </div>
          <div className="iAmGoodAt-text-div">
            <div>
              {props.title && (
                <h1 className={"iAmGoodAt-title-text"}>{props.title}</h1>
              )}
              {content &&
                content.map((contentItem, index) => (
                  <div key={index} className={"iAmGoodAt-text-p"}>
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
