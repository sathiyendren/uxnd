/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "./WorkProjectDetail.css";
import { useParams } from "react-router-dom";
import ProjectTitle from "../../components/projectTitle/ProjectTitle";
import ProjectDetail from "../../components/projectDetail/ProjectDetail";
import PreviousNextArrow from "../../components/previousNext/PreviousNext";

export default function WorkProjectDetail(props) {
  let { id } = useParams();
  const portfolio = props.portfolio;
  const content = portfolio.content;
  const workArray = content.filter(
    (contentItem) => contentItem.type === "project"
  );
  const work = workArray && workArray.length > 0 && workArray[0];
  const projects = work.data.projects;
  const selectedProjectArray = projects.filter((project) => project.id === id);
  const selectedProject =
    selectedProjectArray &&
    selectedProjectArray.length > 0 &&
    selectedProjectArray[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="projectDetail">
      <PreviousNextArrow
        selectedProject={selectedProject}
        projects={projects}
      ></PreviousNextArrow>
      <ProjectTitle project={selectedProject}></ProjectTitle>
      <ProjectDetail details={selectedProject.details} />
    </div>
  );
}
