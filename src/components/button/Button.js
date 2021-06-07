/* eslint-disable react/prop-types */
import React from "react";
import "./Button.css";

export default function Button({
  text,
  className,
  href,
  newTab,
  handler,
  imageURL,
}) {
  return (
    <div className={className}>
      <a
        className={imageURL ? "main-trns-button" : "main-button"}
        href={href}
        target={newTab && "_blank"}
        onClick={handler}
      >
        {!!text && text}
        {imageURL && <img src={imageURL}></img>}
      </a>
    </div>
  );
}
