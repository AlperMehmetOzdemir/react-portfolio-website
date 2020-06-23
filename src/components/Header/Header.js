import React from "react";

import classes from "./Header.module.css";
import Logo from "./Logo/Logo";

const header = (props) => {
  return (
    <div className={classes.Header}>
      <Logo />
      <nav>
        <a href="#">About</a>
        <a href="#">Skills</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </nav>
    </div>
  );
};

export default header;
