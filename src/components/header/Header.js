/*
Reference : 
header menu hover animation - https://codepen.io/tutsplus/pen/XMPQGV
*/

import React, { Component } from "react";
import Headroom from "react-headroom";
import PropTypes from "prop-types";
import "./Header.css";
export default class Header extends Component {
  static propTypes = {
    name: PropTypes.any,
    content: PropTypes.any,
  };

  constructor(props) {
    super(props);
    this.state = {
      color: "#F05F32",
    };
    this.mouseEnter = this.mouseEnter.bind(this);
    this.resize = this.resize.bind(this);
  }

  mouseEnter(e) {
    const target = document.querySelector(".target");
    const links = document.querySelectorAll(".header a");
    const color = this.state.color;
    const parentNode = e.target.parentNode;
    if (!parentNode.classList.contains("active")) {
      for (let i = 0; i < links.length; i++) {
        if (links[i].parentNode.classList.contains("active")) {
          links[i].parentNode.classList.remove("active");
        }
      }

      parentNode.classList.add("active");
      e.target.style.opacity = "1";

      const width = e.target.getBoundingClientRect().width;
      const height = 3;
      const left = e.target.getBoundingClientRect().left + window.pageXOffset;
      const top = e.target.getBoundingClientRect().bottom;

      target.style.width = `${width}px`;
      target.style.height = `${height}px`;
      target.style.left = `${left}px`;
      target.style.top = `${top}px`;
      target.style.borderColor = color;
      target.style.transform = "none";
    }
  }

  resize() {
    const target = document.querySelector(".target");
    const active = document.querySelector(".header li.active");
    if (active) {
      const left = active.getBoundingClientRect().left + window.pageXOffset;
      const top = active.getBoundingClientRect().top + window.pageYOffset;
      target.style.left = `${left}px`;
      target.style.top = `${top}px`;
    }
  }

  initEvents() {
    window.addEventListener("resize", this.resize);
  }

  componentDidMount() {
    this.initEvents();
  }

  render() {
    const username = this.props.name;
    const menus = this.props.content.map((menu) => {
      const display = menu.menuDisplay;
      return (
        display && (
          <li key={menu?.sectionTitle} onMouseEnter={this.mouseEnter}>
            <a className={"roboto-text"} href={"#" + menu?.sectionTitle}>
              {menu?.title}
            </a>
          </li>
        )
      );
    });
    return (
      <Headroom>
        <header className={"header headroom--pinned"}>
          <a href="/" className="logo">
            <span className="logo-name">{username}</span>
          </a>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label
            className="menu-icon"
            htmlFor="menu-btn"
            style={{ color: "white" }}
          >
            <span className={"navicon"}></span>
          </label>
          <ul className={"menu"}>{menus}</ul>
          <span className={"target"}></span>
        </header>
      </Headroom>
    );
  }
}
