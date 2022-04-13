import { useState, useEffect, useRef } from "react";
import headshot from "./images/Ryan_Headshot.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
function LeftPane() {
  const chosenColor = useRef(localStorage.getItem("color"));
  const [chosen, setChosen] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    if (chosen === "default") {
      localStorage.setItem("color", "default");
      window.location.reload(true);
    } else if (chosen === "dark") {
      localStorage.setItem("color", "dark");
      window.location.reload(true);
    } else if (chosen === "pink") {
      localStorage.setItem("color", "pink");
      window.location.reload(true);
    } else if (chosen === "blue") {
      localStorage.setItem("color", "blue");
      window.location.reload(true);
    }
  }, [chosen]);
  useEffect(() => {
    const color = localStorage.getItem("color");
    if (color === "default") {
      setColor("");
    } else if (color === "dark") {
      setColor("#1E1E1E");
    } else if (color === "pink") {
      setColor("pink");
    } else if (color === "blue") {
      setColor("lightblue");
    }
  }, []);

  return (
    <div className="leftPane" style={{ backgroundColor: color }}>
      <a href="/" id="homePageReDirect">
        <h2>Ryan Lim</h2>
      </a>
      <img src={headshot} alt="Ryan" />
      <p>
        Hi My name is Ryan Lim, and I am a Junior software developer. Welcome to
        my personal page.
      </p>
      <div className="socialMedia">
        <a href="https://linkedin.com/in/ryan-lim-b34921202">
          <FontAwesomeIcon
            style={{ color: color }}
            icon={faLinkedin}
            className="ftawIcons"
          ></FontAwesomeIcon>
        </a>
        <a href="https://github.com/bukdu0602">
          <FontAwesomeIcon
            style={{ color: color }}
            icon={faGithub}
            className="ftawIcons"
          ></FontAwesomeIcon>
        </a>
        <a href="https://www.instagram.com/bukdu0602">
          <FontAwesomeIcon
            style={{ color: color }}
            icon={faInstagram}
            className="ftawIcons"
          ></FontAwesomeIcon>
        </a>

        <a href=" mailto: ryan.hyun@gmail.com">
          <FontAwesomeIcon
            style={{ color: color }}
            icon={faEnvelope}
            className="ftawIcons"
          ></FontAwesomeIcon>
        </a>
      </div>
      <hr />

      <div className="theme">
        <h5>Theme</h5>
        <input
          type="radio"
          checked={chosenColor.current === "default"}
          onChange={() => setChosen("default")}
        />{" "}
        Default <br />
        <input
          type="radio"
          checked={chosenColor.current === "dark"}
          onChange={() => setChosen("dark")}
        />{" "}
        Dark <br />
        <input
          type="radio"
          checked={chosenColor.current === "pink"}
          onChange={() => setChosen("pink")}
        />{" "}
        Pink <br />
        <input
          type="radio"
          checked={chosenColor.current === "blue"}
          onChange={() => setChosen("blue")}
        />{" "}
        Blue <br />
      </div>
    </div>
  );
}

export default LeftPane;
