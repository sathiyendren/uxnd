/* eslint-disable react/prop-types */
import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import Contact from "./../../containers/contact/Contact";

export default function Footer({ content }) {
  const contactArray = content.filter(
    (contentItem) => contentItem.type === "contact"
  );
  const contact = contactArray[0];
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        {contact && <Contact {...contact} />}
        <div className={""}>
          <img src={"https://uxnd.in/images/contact_bg.png"} />
        </div>
        <p className={"footer-text"}>{"©️ uxnd"}</p>
      </div>
    </Fade>
  );
}
