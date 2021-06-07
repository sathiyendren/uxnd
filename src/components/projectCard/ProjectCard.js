/* eslint-disable react/prop-types */
import "./ProjectCard.css";
import Project1 from "./../../assets/img/project1.png";

export default function ProjectCard(props) {
  return (
    <div className="card-project">
      <div className="title-project">
        <h3 className="role-project">{props.title}</h3>
      </div>
      <div className="body-project">
        <p>{props.description}</p>
        <img className="thumbnail-project" src={Project1} alt={props.title} />
      </div>
    </div>
  );
}
