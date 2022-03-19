import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalf,
  faDatabase,
  faJ,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import {
  faJs,
  faReact,
  faVuejs,
  faAngular,
  faAndroid,
  faSwift,
  faSass,
  faHtml5,
  faCss3,
  faNodeJs,
  faAws,
  faPhp,
  faMicrosoft,
  faPython,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";

const Skill = () => {
  const [color, setColor] = useState("");

  useEffect(() => {
    const color = localStorage.getItem("color");
    if (color === "default") {
      setColor("");
    } else if (color === "dark") {
      setColor("white");
    } else if (color === "pink") {
      setColor("pink");
    } else if (color === "blue") {
      setColor("lightblue");
    }
  }, []);
  return (
    <div className="languagesWrapper">
      <div className="languageTitle" style={{ color: color }}>
        <FontAwesomeIcon
          style={{ color: color }}
          icon={faScrewdriverWrench}
          className="pipeV"
        />
        <span style={{ color: color }}> Skills</span>
      </div>
      <div className="languageCards">
        <div className="languageCard">
          <div className="webDev">
            <h3 style={{ color: color }}>Front-end Web</h3>
            <div className="iconsAndStars">
              <div className="iconsDiv" style={{ color: color }}>
                <FontAwesomeIcon
                  style={{ color: "red" }}
                  icon={faHtml5}
                ></FontAwesomeIcon>
                <span style={{ color: color }}> HTML</span> <br />
                <FontAwesomeIcon
                  icon={faCss3}
                  style={{ color: "red" }}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  icon={faSass}
                  style={{ color: "pink" }}
                ></FontAwesomeIcon>
                <span style={{ color: color }}> CSS&SASS</span> <br />
                <FontAwesomeIcon
                  icon={faJs}
                  style={{ color: "yellow", backgroundColor: "black" }}
                ></FontAwesomeIcon>
                <span style={{ color: color }}> JavaScript</span> <br />
                <FontAwesomeIcon
                  icon={faReact}
                  style={{ color: "lightblue" }}
                ></FontAwesomeIcon>
                <span style={{ color: color }}> React</span>
                <br />
                <FontAwesomeIcon icon={faVuejs}></FontAwesomeIcon>
                <span style={{ color: color }}> VueJS</span>
                <br />
                <FontAwesomeIcon
                  icon={faAngular}
                  style={{ color: "red" }}
                ></FontAwesomeIcon>
                <span style={{ color: color }}> Angular</span>
                <br />
              </div>
              <div className="starsDiv">
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStarHalf}
                ></FontAwesomeIcon>
                <br />
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStarHalf}
                ></FontAwesomeIcon>
                <br />
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStarHalf}
                ></FontAwesomeIcon>
                <br />
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <br />
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStarHalf}
                ></FontAwesomeIcon>
                <br />
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStarHalf}
                ></FontAwesomeIcon>
              </div>
            </div>
          </div>
        </div>

        <div className="languageCard">
          <div className="webDev">
            <h3 style={{ color: color }}>Back-end</h3>
            <div className="iconsAndStars">
              <div className="iconsDiv">
                <FontAwesomeIcon
                  icon={faNodeJs}
                  style={{ color: "green" }}
                ></FontAwesomeIcon>
                <span style={{ color: color }}> Node.Js</span> <br />
                <FontAwesomeIcon
                  icon={faMicrosoft}
                  style={{ color: "lightblue" }}
                ></FontAwesomeIcon>
                <span style={{ color: color }}> .net</span>
                <br />
                <FontAwesomeIcon
                  icon={faAws}
                  style={{ color: "orange" }}
                ></FontAwesomeIcon>
                <span style={{ color: color }}> AWS Serverless</span>
                <br />
                <FontAwesomeIcon
                  icon={faDatabase}
                  style={{ color: "black" }}
                ></FontAwesomeIcon>
                <span style={{ color: color }}> RDS(SQL)</span>
                <br />
              </div>
              <div className="starsDiv">
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>

                <br />
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStarHalf}
                ></FontAwesomeIcon>
                <br />
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <br />
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
              </div>
            </div>
          </div>
        </div>
        <div className="languageCard">
          <div className="webDev">
            <h3 style={{ color: color }}>Mobile</h3>
            <div className="iconsAndStars">
              <div className="iconsDiv">
                <FontAwesomeIcon
                  name="vanilaJS"
                  icon={faSwift}
                  style={{ color: "red" }}
                ></FontAwesomeIcon>
                <span style={{ color: color }}> Swift</span> <br />
                <FontAwesomeIcon
                  name="react"
                  icon={faAndroid}
                ></FontAwesomeIcon>
                <span style={{ color: color }}> Kotlin</span>
                <br />
                <FontAwesomeIcon
                  icon={faReact}
                  style={{ color: "lightblue" }}
                ></FontAwesomeIcon>
                <span style={{ color: color }}> React Native</span>
                <br />
              </div>
              <div className="starsDiv">
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>

                <br />
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <br />
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStarHalf}
                ></FontAwesomeIcon>
              </div>
            </div>
          </div>
        </div>
        <div className="languageCard">
          <div className="webDev">
            <h3 style={{ color: color }}>Others</h3>
            <div className="iconsAndStars">
              <div className="iconsDiv">
                <FontAwesomeIcon
                  name="vanilaJS"
                  icon={faPython}
                  style={{ color: "blue" }}
                ></FontAwesomeIcon>
                <span style={{ color: color }}> Python</span> <br />
                <FontAwesomeIcon
                  name="react"
                  icon={faPhp}
                  style={{ color: "black", background: "#7377AD" }}
                ></FontAwesomeIcon>
                <span style={{ color: color }}> PHP & Laravel</span>
                <br />
                <FontAwesomeIcon
                  icon={faBootstrap}
                  style={{ color: "#6F11EF" }}
                ></FontAwesomeIcon>
                <span style={{ color: color }}> Bootstrap</span>
                <br />
                <FontAwesomeIcon
                  icon={faJ}
                  style={{ color: "blue" }}
                ></FontAwesomeIcon>
                <span style={{ color: color }}> Jquery</span>
                <br />
              </div>
              <div className="starsDiv">
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStarHalf}
                ></FontAwesomeIcon>
                <br />
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStarHalf}
                ></FontAwesomeIcon>

                <br />
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStarHalf}
                ></FontAwesomeIcon>
                <br />
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="stars"
                  icon={faStarHalf}
                ></FontAwesomeIcon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
