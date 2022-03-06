import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
  return (
    <div className="contactPage">
      <h1>GET IN TOUCH</h1>
      <h3>I am looking forward to meeting you!</h3>
      <p>
        Email: ryan.hyun@gmail.com <br />
        My Physical Location: Burnaby B.C. Canada <br />I am also available
        remotely.
      </p>
      <div className="contactMeIcons">
        <FontAwesomeIcon className="ftIcon" icon={faLinkedin}></FontAwesomeIcon>{" "}
        <FontAwesomeIcon className="ftIcon" icon={faGithub}></FontAwesomeIcon>{" "}
        <FontAwesomeIcon className="ftIcon" icon={faEnvelope}></FontAwesomeIcon>{" "}
      </div>
    </div>
  );
}

export default Contact;
