// import backgroundIMG from "./images/header-image.jpeg";
import { Link } from "react-router-dom";
import resume from "./resume/resume.pdf";
import React, { useEffect, useRef } from "react";
import waterfall from "./images/waterfall.mp4";

function Header() {
  const vidRef = useRef();

  return (
    <div className="header">
      <video autoPlay loop muted ref={vidRef}>
        <source src={waterfall} type="video/mp4" />
      </video>

      {/* <img src={backgroundIMG} alt="water fall" /> */}
      <div className="headerText">
        <h4>Junior Software Developer</h4>
        <p>
          I'm a fullstack junior software developer. Last two years, I have
          finished Software System Developer program from BCIT, Web Development
          Bootcamp, Python Bootcamp, and IOS Bootcamp programs from App
          brewery(online).
        </p>
        <Link
          type="button"
          className="btn btn-light resume"
          to={resume}
          target="_blank"
          download
        >
          Download Resume
        </Link>
      </div>
    </div>
  );
}

export default Header;
