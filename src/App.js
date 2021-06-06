import "./App.css";
import Header from "./components/header/Header";
import Greeting from "./containers/greeting/Greeting";
import WorkExperience from "./containers/workExperience/WorkExperience";
import Contact from "./containers/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Greeting />
      <WorkExperience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
