import "./WorkExperience.css";
import ExperienceCard from "../../components/experieceCard/ExperienceCard";
import { workExperiences } from "../../portfolio";

export default function Experience() {
  if (workExperiences.display) {
    return (
      <div id="experience">
        <h2>Work Experiences</h2>
        <div className="experiences">
          {workExperiences.experiences.map((experience, i) => {
            return <ExperienceCard key={i} {...experience} />;
          })}
        </div>
      </div>
    );
  }
  return null;
}
