import React, { Fragment } from "react";

import classes from "./Layout.module.css";
import Header from "../Header/Header";

const layout = (props) => {
  return (
    <Fragment>
      <Header />
      <main className={classes.Content}>{props.children}</main>
    </Fragment>
  );
};

export default layout;
