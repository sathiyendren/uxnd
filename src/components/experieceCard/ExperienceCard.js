/* eslint-disable react/prop-types */
import "./ExperienceCard.css";
import Technology from "../technology/Technology";
import KeyExperience from "../keyExperience/KeyExperience";

export default function ExperienceCard(props) {
  const getDateExperience = (start, end) => {
    const monthsValues = {
      Jan: 0,
      Feb: 1,
      Mar: 2,
      Apr: 3,
      May: 4,
      Jun: 5,
      Jul: 6,
      Aug: 7,
      Sep: 8,
      Oct: 9,
      Nov: 10,
      Dec: 11,
    };
    const [startMonth, startYear] = start.split(" ");
    let startDate = new Date(parseInt(startYear), monthsValues[startMonth], 1);
    let endDate;
    if (end === "Present") {
      endDate = new Date();
    } else {
      const [endMonth, endYear] = end.split(" ");
      endDate = new Date(parseInt(endYear), monthsValues[endMonth], 1);
    }

    let months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + 1;
    months -= startDate.getMonth();
    months += endDate.getMonth();
    months = months <= 0 ? 0 : months;

    let msg;
    if (months < 12) {
      msg = `${months} ${months == 1 ? "mo" : "mos"}`;
    } else if (months % 12 == 0) {
      msg = `${parseInt(months / 12)} ${
        parseInt(months / 12) == 1 ? "yr" : "yrs"
      }`;
    } else {
      msg = `${parseInt(months / 12)} ${
        parseInt(months / 12) == 1 ? "yr" : "yrs"
      } ${months % 12} ${months % 12 == 1 ? "mo" : "mos"}`;
    }

    return `${start} - ${end} (${msg})`;
  };

  return (
    <div className="card-experience">
      <div className="title-experience">
        <img
          className="logo-experience"
          src={props.companyLogo}
          alt={props.company}
        />
        <div className="info-experience">
          <h3 className="role-experience">{props.role}</h3>
          <h4 className="company-experience">{props.company}</h4>
          <em className="location-experience">{props.companyLocation}</em>
          <em className="date-experience">
            {getDateExperience(props.startDate, props.endDate)}
          </em>
        </div>
      </div>
      <div className="body-experience">
        <p>{props.description}</p>
        <ul>
          <li>
            <h5>Technologies</h5>
            {props.technologies.map((tech, i) => {
              return <Technology key={i} name={tech} />;
            })}
          </li>
          <li>
            <h5>Key Experiences</h5>
            {props.keyExperiences.map((experience, i) => {
              return <KeyExperience key={i} name={experience} />;
            })}
          </li>
        </ul>
      </div>
    </div>
  );
}
