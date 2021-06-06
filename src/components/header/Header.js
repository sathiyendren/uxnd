import React from "react";
import Headroom from "react-headroom";
import "./Header.css";
import { greeting, workExperiences } from "../../portfolio";

export default function Header() {
  const viewExperience = workExperiences.display;

  return (
    <Headroom>
      <header className={"header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className={"navicon"}></span>
        </label>
        <ul className={"menu"}>
          {viewExperience && (
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          )}
        </ul>
      </header>
    </Headroom>
  );
}
