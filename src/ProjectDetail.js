import { useLocation } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function ProjectDetail() {
  const location = useLocation();
  const props = location.state;
  console.log(props);
  return (
    <div className="projectDetail">
      <h1>{props.title}</h1>

      <Carousel>
        {props.imgName.map((item) => (
          <div>
            <img src={require(`./images/projects/${item}.png`)} alt="" />
          </div>
        ))}
      </Carousel>
      <a
        type="button"
        className="btn btn-outline-success"
        href={props.websiteURL}
      >
        Visit Live Site
      </a>
      <a type="button" className="btn btn-outline-success" href={props.Github}>
        Visit Github Page
      </a>
      <div className="langDiv">
        {props.Languages.map((i) => (
          <p className="techStack">&nbsp;{i}&nbsp;</p>
        ))}
      </div>
      <p className="detailPageText">
        Date Created: {props.dateCreated} <br />
        Dscription: {props.description}
      </p>
    </div>
  );
}

export default ProjectDetail;
