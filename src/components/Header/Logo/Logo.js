import React from "react";

import classes from "./Logo.module.css";
import { ReactComponent as MyLogo } from "../../../assets/images/logo.svg";

const logo = (props) => {
  return (
    <a href="#" className={classes.Logo}>
      AMO
    </a>
  );
};

export default logo;
