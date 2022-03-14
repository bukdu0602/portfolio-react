import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "default_service",
        "template_ozff3ci",
        form.current,
        process.env.REACT_APP_EMAILJS_KEY
      )
      .then(
        (result) => {
          alert("The message has been sent successfully.");
        },
        (error) => {
          alert("Error sending the message");
          alert(error.text);
        }
      );
  };
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
        <a href="https://linkedin.com/in/ryan-lim-b34921202">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="ftIcon"
          ></FontAwesomeIcon>
        </a>{" "}
        <a href="https://github.com/bukdu0602">
          <FontAwesomeIcon icon={faGithub} className="ftIcon"></FontAwesomeIcon>
        </a>{" "}
        <a href=" mailto: ryan.hyun@gmail.com">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="ftIcon"
          ></FontAwesomeIcon>
        </a>{" "}
      </div>

      <form ref={form} onSubmit={sendEmail}>
        <div className="emailForm">
          <h4>Send me a message!</h4>
          <label>Name</label> <br />
          <input type="text" name="user_name" />
          <br />
          <label>Email</label> <br />
          <input type="email" name="user_email" />
          <br />
          <label>Message</label>
          <br />
          <textarea name="message" rows="5" />
          <br />
          <input type="submit" value="Send" className="emailButton" />
        </div>
      </form>
    </div>
  );
}

export default Contact;
