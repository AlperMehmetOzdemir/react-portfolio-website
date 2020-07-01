import React from "react";
import { Link } from "react-scroll";

import classes from "./Nav.module.css";

const nav = (props) => {
  // const home = document.querySelector("#home");
  // const about = document.querySelector("#baout");
  // const skills = document.querySelector("#skills");
  // const projects = document.querySelector("#projects");
  // const contact = document.querySelector("#contact");

  return (
    <nav className={classes.Links}>
      <Link
        to="about"
        spy={true}
        smooth={true}
        duration={500}
        className={classes.Link}
      >
        About
      </Link>
      <Link
        to="skills"
        spy={true}
        smooth={true}
        duration={500}
        className={classes.Link}
      >
        Skills
      </Link>
      <Link
        to="projects"
        spy={true}
        smooth={true}
        duration={500}
        className={classes.Link}
      >
        Projects
      </Link>
      <Link
        to="contact"
        spy={true}
        smooth={true}
        duration={500}
        className={classes.Link}
      >
        Contact
      </Link>
    </nav>
  );
};

export default nav;
