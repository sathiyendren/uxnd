/* eslint-disable indent */
import "./App.css";
import Header from "./components/header/Header";
import Portfolio from "./containers/portfolio/Portfolio";
import Footer from "./components/footer/Footer";
import WorkProjectDetail from "./containers/workProject/WorkProjectDetail";
import { portfolio } from "./portfolioData";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header {...portfolio} />
        <Switch>
          <Route
            path="/"
            component={() => <Portfolio portfolio={portfolio} />}
            exact
          />
          <Route
            path="/project/:id"
            component={() => <WorkProjectDetail portfolio={portfolio} />}
          />
        </Switch>
        <Footer {...portfolio} />
      </Router>
    </div>
  );
}

export default App;
