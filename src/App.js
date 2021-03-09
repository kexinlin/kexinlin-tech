import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Navbar from "./components/Navbar";
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AboutMe />
      <Education/>
      <Project/>
    </div>
  );
}

export default App;
