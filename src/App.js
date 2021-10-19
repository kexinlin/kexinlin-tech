import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Quote from "./components/Quote";
import LazyLoad from "react-lazyload";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <AboutMe />
      <Experience />
      <Education />
      <Skill />
      <LazyLoad height={500}>
        <Project />
      </LazyLoad>
      <Contact />
      <Quote />
      <Footer />
    </Router>
  );
}

export default App;
