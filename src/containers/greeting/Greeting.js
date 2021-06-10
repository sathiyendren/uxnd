/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.css";

export default function Greeting(props) {
  const [height, setHeight] = useState(600);
  let divStyle = {
    height: height + " px",
  };

  useEffect(() => {
    // debugger;
    setHeight(document.body.scrollHeight);
    divStyle = {
      height: height + 100 + "px",
    };
    console.log(document.body.scrollHeight);
  });
  const data = props.data;
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main" style={divStyle}>
          <div className="greeting-text-div">
            <div>
              <div className={"greeting-text"}>
                {data.greeting}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </div>
              <div className={"title-text"}>{data.title}</div>
              <div className={"title-text"}>{data.subTitle}</div>
              <p className={"greeting-text-p subTitle"}>
                {data.description}{" "}
                <a href="#aboutMe" style={{ color: "#DBA46B" }}>
                  {" "}
                  Read on
                </a>
              </p>
            </div>
          </div>
          <div className="greeting-image-div">
            <img alt="man sitting on table" src={data.imageURL}></img>
          </div>
        </div>
      </div>
    </Fade>
  );
}
