/* eslint-disable react/prop-types */
import React from "react";
import { Fade } from "react-reveal";
import "./ProjectTitle.css";
import Button from "../../components/button/Button";
import { useHistory } from "react-router-dom";
import appStoreImage from "./../../assets/img/appStore.png";
import playStoreImage from "./../../assets/img/playStore.png";
export default function ProjectTitle(props) {
  const project = props?.project;
  const appStore = project?.appStoreLink?.apple;
  const playStore = project?.appStoreLink?.android;
  let history = useHistory();
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="projectTitle-main" id="projectTitle">
        <div className="projectTitle-main-content">
          <div className="projectTitle-back-btn-div">
            <Button
              text="Back"
              handler={() => history.goBack()}
              className={"back-container"}
            />
          </div>
          <div className="projectTitle-text-div">
            <div className="projectTitle-text-inner-div">
              <div className="projectTitle-text-inner-div-img">
                <img src={`/images/${project.imageURL}`} />
              </div>
              <div className="projectTitle-text-inner-div-title"></div>
            </div>
          </div>
          <div className="projectTitle-store-div">
            {appStore && (
              <Button href={appStore} newTab={true} imageURL={appStoreImage} />
            )}
            {playStore && (
              <Button
                href={playStore}
                newTab={true}
                imageURL={playStoreImage}
              />
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
