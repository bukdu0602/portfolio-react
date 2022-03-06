import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Nav from "./Nav";
import Footer from "./Footer";
import LeftPane from "./LeftPane";
import Header from "./Header";
import Skill from "./Skill";
import "./scss/styles.scss";
import resume from "./resume/resume.pdf";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <LeftPane />
        <Header />
        <Nav />
        <div className="home">
          <Routes>
            <Route path="/" element={<Skill />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/About" element={<About pdf={resume} />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer className="footer" />
      </div>
    </BrowserRouter>
  );
}

export default App;
