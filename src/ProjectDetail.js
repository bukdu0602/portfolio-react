import { useLocation } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useState, useEffect } from "react";

function ProjectDetail() {
  const location = useLocation();
  const props = location.state;
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
  return (
    <div className="projectDetail">
      <h1 style={{ color: color }}>{props.title}</h1>

      <Carousel>
        {props.imgName.map((item) => (
          <div key={item.id}>
            <img src={require(`./images/projects/${item}.png`)} alt="" />
          </div>
        ))}
      </Carousel>
      {props.websiteURL && (
        <a
          style={{ color: color, borderColor: color, background: color2 }}
          type="button"
          className="btn btn-outline-success"
          href={props.websiteURL}
        >
          Visit Live Site
        </a>
      )}

      <a
        style={{ color: color, borderColor: color, background: color2 }}
        type="button"
        className="btn btn-outline-success"
        href={props.Github}
      >
        Visit Github Page
      </a>
      <div
        className="langDiv"
        style={{ backgroundColor: color, color: color2 }}
      >
        {props.Languages.map((i) => (
          <p className="techStack">&nbsp;{i}&nbsp;</p>
        ))}
      </div>
      <p className="detailPageText" style={{ color: color }}>
        Date Created: {props.dateCreated} <br />
        Dscription: {props.description}
      </p>
    </div>
  );
}

export default ProjectDetail;
