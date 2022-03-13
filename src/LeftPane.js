import headshot from "./images/Ryan_Headshot.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
function LeftPane() {
  return (
    <div className="leftPane">
      <h2>Ryan Lim</h2>
      <img src={headshot} alt="Ryan" />
      <p>
        Hi My name is Ryan Lim, and I am a Junior software developer. Welcome to
        my personal page.
      </p>
      <div className="socialMedia">
        <a href="https://linkedin.com/in/ryan-lim-b34921202">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="ftawIcons"
          ></FontAwesomeIcon>
        </a>
        <a href="https://github.com/bukdu0602">
          <FontAwesomeIcon
            icon={faGithub}
            className="ftawIcons"
          ></FontAwesomeIcon>
        </a>
        <a href="https://www.instagram.com/bukdu0602">
          <FontAwesomeIcon
            icon={faInstagram}
            className="ftawIcons"
          ></FontAwesomeIcon>
        </a>

        <a href=" mailto: ryan.hyun@gmail.com">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="ftawIcons"
          ></FontAwesomeIcon>
        </a>
      </div>
      <hr />
    </div>
  );
}

export default LeftPane;
