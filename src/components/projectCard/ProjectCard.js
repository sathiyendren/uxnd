/* eslint-disable react/prop-types */
import "./ProjectCard.css";
import { Link } from "react-router-dom";

export default function ProjectCard(props) {
  return (
    <Link className="work-link" to={`/project/${props.id}#project`}>
      <div className="card-project shadow">
        <div className="title-project">
          <h3 className="role-project">{props.title}</h3>
        </div>
        <div className="body-project">
          <p>{props.description}</p>
          <img
            className="thumbnail-project"
            // eslint-disable-next-line no-undef
            src={`/images/${props.thumbnailURL}`}
            alt={props.title}
          />
        </div>
      </div>
    </Link>
  );
}
