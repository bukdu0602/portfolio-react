import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

let projects = [
  {
    id: 1,
    title: "TypeBible",
    imgName: ["typeBible0", "typeBible1", "typeBible2", "typeBible3"],
    dateCreated: "2021-April",
    description:
      "This website let you type the bible, Sign up to save the progress, and also view the typing speed this website is made with vanila javascript and Passport for Authentication",
    websiteURL: "https://bibible.herokuapp.com/",
    Github: "https://github.com/bukdu0602/Bible-Typing",
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
      "Bootstrap",
    ],
  },
  {
    id: 2,
    title: "MovieApp",
    imgName: ["movieApp0", "movieApp1"],
    dateCreated: "2021-December",
    description:
      "Check popular, top rated, now playing, upcoming movies, This website is made with React and TMDB api",
    websiteURL: "https://movieappreactssd.herokuapp.com/",
    Github: "https://github.com/bukdu0602/movieapp-react-forHeroku",
    Languages: ["React", "CSS", "Redux", "TMDB api", "Heroku", "EJS"],
  },
  {
    id: 3,
    title: "MovieAppAngular",
    imgName: ["angularMovieApp0"],
    dateCreated: "2022-January",
    description:
      "Check movies by genres, This website is made with Angular and TMDB api",
    websiteURL: "",
    Github: "https://github.com/bukdu0602/angular-movie-app",
    Languages: ["Angular", "SASS", "TMDB api", "Passport", "Heroku", "EJS"],
  },
  {
    id: 4,
    title: "Outstagram",
    imgName: ["outstagram0"],
    dateCreated: "2022-February",
    description:
      "Similar to Instagram, this website saves and loads images. The Backend is configured with AWS Serverless",
    websiteURL: "",
    Github: "https://github.com/bukdu0602/AWS-serverless",
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
  function mouseOn(id) {
    for (let i = 0; i < projects.length; i++) {
      if (id === projects[i].id) {
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
              style={{ borderColor: color }}
              key={item.id}
              onMouseEnter={() => mouseOn(item.id)}
              onMouseLeave={() => setMouseOver("")}
            >
              <h3 style={{ color: color }}>{item.title}</h3>
              {/* {item.websiteURL && (
                <button type="button" className="btn btn-outline-success">
                  Go To the App!!
                </button>
              )} */}

              <div className="prjImgDiv">
                <img
                  src={require(`./images/projects/${item.imgName[0]}.png`)}
                  alt=""
                />{" "}
                {mouseOver && (
                  <Link to="/projectdetail" state={item}>
                    <div className="projectBoard">
                      <h4>Technologies:</h4>
                      {mouseOver.map((item) => (
                        <span key={item}> {item} </span>
                      ))}
                    </div>
                  </Link>
                )}
              </div>
              <Link
                style={{ color: color2, backgroundColor: color }}
                type="button"
                className="btn btn-outline-success"
                to="/projectdetail"
                state={item}
              >
                Detail Page
              </Link>
              {/* <p>
                Date Created: {item.dateCreated} <br />
                Description: {item.description}
              </p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
