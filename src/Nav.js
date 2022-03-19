import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Nav() {
  const [color, setColor] = useState("");

  useEffect(() => {
    const color = localStorage.getItem("color");
    if (color === "default") {
      setColor("");
    } else if (color === "dark") {
      setColor("#1E1E1E");
    } else if (color === "pink") {
      setColor("pink");
    } else if (color === "blue") {
      setColor("lightblue");
    }
  }, []);
  return (
    <div className="navwrapper" style={{ backgroundColor: color }}>
      <nav>
        <Link className="nav-link active" aria-current="page" to="/">
          Skill
        </Link>
        <Link className="nav-link active" aria-current="page" to="/projects">
          Project
        </Link>
        <Link className="nav-link active" aria-current="page" to="/about">
          About
        </Link>
        <Link className="nav-link active" aria-current="page" to="/contact">
          Contact
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
