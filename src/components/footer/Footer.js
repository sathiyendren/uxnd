import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";

export default function Footer() {
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <div className={""}>
          <img src={"https://uxnd.in/images/contact_bg.png"} />
        </div>
        <p className={"footer-text"}>{"©️ uxnd"}</p>
      </div>
    </Fade>
  );
}
