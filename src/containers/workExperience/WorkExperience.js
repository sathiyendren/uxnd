/* eslint-disable react/prop-types */
import "./WorkExperience.css";
import ExperienceCard from "../../components/experieceCard/ExperienceCard";

export default function Experience(props) {
  return (
    <div id="experience">
      <h2>Work Experiences</h2>
      <div className="experiences">
        {props.data.experiences &&
          props.data.experiences.map((experience, i) => {
            return <ExperienceCard key={i} {...experience} />;
          })}
      </div>
    </div>
  );
}
