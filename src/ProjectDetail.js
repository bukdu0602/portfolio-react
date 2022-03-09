import { useLocation } from "react-router-dom";

function ProjectDetail() {
  const location = useLocation();
  const props = location.state;
  console.log(props);
  return (
    <div className="projectDetail">
      <h1>{props.title}</h1>
      <p>
        Date Created:{props.dateCreated} <br />
        Dscription: {props.description}
      </p>
    </div>
  );
}

export default ProjectDetail;
