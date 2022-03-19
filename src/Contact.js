import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
function Contact() {
  const form = useRef();
  const [color, setColor] = useState("");
  const [color2, setColor2] = useState("");
  useEffect(() => {
    const color = localStorage.getItem("color");
    if (color === "default") {
      setColor("");
      setColor2("");
    } else if (color === "dark") {
      setColor("white");
      setColor2("#1D1B1C");
    } else if (color === "pink") {
      setColor("pink");
    } else if (color === "blue") {
      setColor("lightblue");
    }
  }, []);
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
    <div className="contactPage" style={{ color: color }}>
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
            style={{ color: color }}
            icon={faLinkedin}
            className="ftIcon"
          ></FontAwesomeIcon>
        </a>{" "}
        <a href="https://github.com/bukdu0602">
          <FontAwesomeIcon
            style={{ color: color }}
            icon={faGithub}
            className="ftIcon"
          ></FontAwesomeIcon>
        </a>{" "}
        <a href=" mailto: ryan.hyun@gmail.com">
          <FontAwesomeIcon
            style={{ color: color }}
            icon={faEnvelope}
            className="ftIcon"
          ></FontAwesomeIcon>
        </a>{" "}
      </div>

      <form ref={form} onSubmit={sendEmail}>
        <div
          className="emailForm"
          style={{ backgroundColor: color, color: color2 }}
        >
          <h4>Send me a message!</h4>
          <label>Name</label> <br />
          <input style={{ borderColor: color }} type="text" name="user_name" />
          <br />
          <label>Email</label> <br />
          <input
            style={{ borderColor: color }}
            type="email"
            name="user_email"
          />
          <br />
          <label>Message</label>
          <br />
          <textarea name="message" rows="5" />
          <br />
          <input
            style={{ color: color, backgroundColor: color2 }}
            type="submit"
            value="Send"
            className="emailButton"
          />
        </div>
      </form>
    </div>
  );
}

export default Contact;
