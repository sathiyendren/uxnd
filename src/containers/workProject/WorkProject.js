/* eslint-disable react/prop-types */
import "./WorkProject.css";
import ProjectCard from "../../components/projectCard/ProjectCard";

export default function WorkProject(props) {
  return (
    <div id="project">
      <h2>{props.title}</h2>
      <div className="projects">
        {props.data.projects &&
          props.data.projects.map((project, i) => {
            return <ProjectCard key={i} {...project} />;
          })}
        {(!props.data.projects || props.data.projects.length == 0) && (
          <h4> No Projects Found.</h4>
        )}
      </div>
    </div>
  );
}
