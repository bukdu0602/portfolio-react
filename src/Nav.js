import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navwrapper">
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
