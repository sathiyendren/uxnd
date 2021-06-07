/* eslint-disable indent */
/* eslint-disable react/prop-types */
import "./Portfolio.css";
import Greeting from "./../greeting/Greeting";
import WorkExperience from "./../workExperience/WorkExperience";
import WorkProject from "./../workProject/WorkProject";
import Contact from "./../contact/Contact";
import AboutMe from "./../aboutMe/AboutMe";
import ToolsIUse from "./../toolsIUse/ToolsIUse";
import IAmGoodAt from "./../iAmGoodAt/IAmGoodAt";
import { Component } from "react";

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.getContent = this.getContent.bind(this);
  }

  getContent() {
    return this.props.portfolio.content.map((item) => {
      let contentItem = null;
      switch (item.type) {
        case "greetings":
          contentItem = item.display && <Greeting {...item} />;
          break;
        case "experience":
          contentItem = item.display && <WorkExperience {...item} />;
          break;
        case "project":
          contentItem = item.display && <WorkProject {...item} />;
          break;
        case "contact":
          contentItem = item.display && <Contact {...item} />;
          break;
        case "aboutMe":
          contentItem = item.display && <AboutMe {...item} />;
          break;
        case "tools":
          contentItem = item.display && <ToolsIUse {...item} />;
          break;
        case "skills":
          contentItem = item.display && <IAmGoodAt {...item} />;
          break;
        default:
          contentItem = <></>;
          break;
      }
      return contentItem;
    });
  }

  render() {
    return <>{this.props?.portfolio && this.getContent()}</>;
  }
}
