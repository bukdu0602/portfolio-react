import { useState } from "react";
import { Link } from "react-router-dom";

let projects = [
  {
    id: 1,
    title: "TypeBible",
    imgName: "typeBible",
    dateCreated: "2021-April",
    description:
      "This website let you type the bible, Sign up to save the progress, and also view the typing speed this website is made with vanila javascript and Passport for Authentication",
    websiteURL: "https://bibible.herokuapp.com/",
    Languages: [
      "Html",
      "Javascript",
      "CSS",
      "MongoDB",
      "NodeJS",
      "Express",
      "Passport",
      "Heroku",
      "EJS",
    ],
  },
  {
    id: 2,
    title: "MovieApp",
    imgName: "movieApp",
    dateCreated: "2021-December",
    description:
      "Check popular, top rated, now playing, upcoming movies, This website is made with React and TMDB api",
    websiteURL: "https://movieappreactssd.herokuapp.com/",
    Languages: ["React", "CSS", "Redux", "TMDB api", "Heroku", "EJS"],
  },
  {
    id: 3,
    title: "MovieAppAngular",
    imgName: "angularMovieApp",
    dateCreated: "2022-January",
    description:
      "Check movies by genres, This website is made with Angular and TMDB api",
    websiteURL: "",
    Languages: ["Angular", "SASS", "TMDB api", "Passport", "Heroku", "EJS"],
  },
  {
    id: 4,
    title: "Outstagram",
    imgName: "outstagram",
    dateCreated: "2022-February",
    description:
      "Similar to Instagram, this website saves and loads images. The Backend is configured with AWS Serverless",
    websiteURL: "",
    Languages: [
      "React",
      "SASS",
      "AWS Lambda Function",
      "AWS Cognito",
      "AWS RDS",
      "AWS S3",
    ],
  },
];

function Projects() {
  const [mouseOver, setMouseOver] = useState("");

  function mouseOn(id) {
    for (let i = 0; i < projects.length; i++) {
      if (id == projects[i].id) {
        setMouseOver(projects[i].Languages);
      }
    }
  }
  return (
    <div className="projectsWrapper">
      {/* <h1>Projects</h1> */}

      <div className="projectEntire">
        <div className="CardsDiv">
          {projects.map((item) => (
            <div
              className="projectCards"
              key={item.id}
              onMouseEnter={() => mouseOn(item.id)}
              onMouseLeave={() => setMouseOver("")}
            >
              <h3>{item.title}</h3>
              {item.websiteURL && (
                <button type="button" className="btn btn-outline-success">
                  Go To the App!!
                </button>
              )}
              <Link
                type="button"
                className="btn btn-outline-success"
                to="/projectdetail"
                state={item}
              >
                Detail Page
              </Link>
              <div className="prjImgDiv">
                <img
                  src={require(`./images/projects/${item.imgName}0.png`)}
                  alt=""
                />
                {mouseOver && (
                  <div className="projectBoard">
                    <h4>Technologies:</h4>
                    {mouseOver.map((item) => (
                      <p key={item}>{item} </p>
                    ))}
                  </div>
                )}
              </div>
              <p>
                Date Created: {item.dateCreated} <br />
                Description: {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
