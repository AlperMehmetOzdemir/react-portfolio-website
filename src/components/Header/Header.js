import React from "react";

import classes from "./Header.module.css";
import Logo from "./Logo/Logo";
import Nav from "./Nav/Nav";

const header = (props) => {
  return (
    <div className={classes.Header}>
      <Logo />
      <Nav />
    </div>
  );
};

export default header;
