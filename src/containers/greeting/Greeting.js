/* eslint-disable react/prop-types */
import React from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.css";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import manOnTable from "../../assets/img/manOnTable.svg";

import { illustration } from "../../portfolio";

export default function Greeting(props) {
  const data = props.data;
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <div className={"greeting-text"}>
                {data.greeting}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </div>
              <h1 className={"title-text"}>{data.title}</h1>
              <p className={"greeting-text-p subTitle"}>{data.subTitle}</p>
              <SocialMedia {...data.socialMediaLinks} />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                <Button
                  text="See my resume"
                  newTab={true}
                  href={data.resumeLink}
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img alt="man sitting on table" src={manOnTable}></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
