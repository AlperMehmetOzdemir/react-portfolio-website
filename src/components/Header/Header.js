import React from "react";

import classes from "./Header.module.css";
import Logo from "./Logo/Logo";

const header = (props) => {
  return (
    <div className={classes.Header}>
      <Logo />
      <nav className={classes.Links}>
        <a className={classes.Link} href="#">
          About
        </a>
        <a className={classes.Link} href="#">
          Skills
        </a>
        <a className={classes.Link} href="#">
          Projects
        </a>
        <a className={classes.Link} href="#">
          Contact
        </a>
      </nav>
    </div>
  );
};

export default header;
