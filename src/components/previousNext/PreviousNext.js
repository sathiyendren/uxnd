/* eslint-disable react/prop-types */
import "./PreviousNext.css";
import arrowLeftImage from "./../../assets/img/arrow_left.png";
import arrowRightImage from "./../../assets/img/arrow_right.png";
import Button from "../button/Button";
import { Link } from "react-router-dom";

const PreviousNextArrow = ({ selectedProject, projects }) => {
  console.log(selectedProject);
  console.log(projects);
  const onNextProjectClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onPreviousProjectClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isLastProject = () => {
    return selectedProject.id === projects[projects.length - 1].id;
  };

  const isFirstProject = () => {
    return selectedProject.id === projects[0].id;
  };

  const selectedProjectId = selectedProject.id;

  return (
    <>
      <Link
        className="work-link"
        to={`/project/${parseInt(selectedProjectId) - 1}#project`}
      >
        <Button
          className={`previous_btn ${isFirstProject() ? "hide" : "show"}`}
          imageURL={arrowLeftImage}
          handler={onPreviousProjectClick}
        />
      </Link>
      <Link
        className="work-link"
        to={`/project/${parseInt(selectedProjectId) + 1}#project`}
      >
        <Button
          className={`next_btn ${isLastProject() ? "hide" : "show"}`}
          imageURL={arrowRightImage}
          handler={onNextProjectClick}
        />
      </Link>
    </>
  );
};

export default PreviousNextArrow;
