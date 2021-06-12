/* eslint-disable react/prop-types */
import React from "react";
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
    <div className="projectTitle-main" id="projectTitle">
      <div className="projectTitle-main-content">
        <div className="projectTitle-back-btn-div">
          <div className={"div-container"}>
            <Button
              text="Back"
              handler={() => history.goBack()}
              className={"back-container black"}
            />
          </div>
          <div className={"div-container"}>
            <div className="projectTitle-store-div">
              {playStore && (
                <Button
                  href={playStore}
                  newTab={true}
                  imageURL={playStoreImage}
                />
              )}
              {appStore && (
                <Button
                  href={appStore}
                  newTab={true}
                  imageURL={appStoreImage}
                />
              )}
            </div>
          </div>
        </div>
        <div className="projectTitle-text-div">
          <div className="projectTitle-text-inner-div">
            <div className="projectTitle-text-inner-div-title">
              <span className="projectTitle-text-inner-div-title-span">
                {project.title}
              </span>
            </div>
            <div
              className="projectTitle-text-inner-div-img"
              style={{ height: "500px" }}
            >
              <img src={project.imageURL} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
