import React from "react";
import { Link } from "react-scroll";

import classes from "./Logo.module.css";

const logo = (props) => {
  return (
    <Link
      to="home"
      spy={true}
      smooth={true}
      duration={500}
      className={classes.Logo}
    >
      AMO
    </Link>
  );
};

export default logo;
