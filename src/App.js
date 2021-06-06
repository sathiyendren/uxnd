/* eslint-disable indent */
import "./App.css";
import Header from "./components/header/Header";
import Greeting from "./containers/greeting/Greeting";
import WorkExperience from "./containers/workExperience/WorkExperience";
import Contact from "./containers/contact/Contact";
import AboutMe from "./containers/aboutMe/AboutMe";
import ToolsIUse from "./containers/toolsIUse/ToolsIUse";
import IAmGoodAt from "./containers/iAmGoodAt/IAmGoodAt";
import Footer from "./components/footer/Footer";
import { portfolio } from "./portfolio";

function App() {
  const content = portfolio.content.map((item) => {
    let contentItem = null;
    switch (item.type) {
      case "greetings":
        contentItem = item.display && <Greeting {...item} />;
        break;
      case "experience":
        contentItem = item.display && <WorkExperience {...item} />;
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
  return (
    <div className="App">
      <Header {...portfolio} />
      {content}
      <Footer {...portfolio} />
    </div>
  );
}

export default App;
