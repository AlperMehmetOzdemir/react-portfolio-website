import React from "react";

import classes from "./Card.module.css";
import { GoMarkGithub } from "react-icons/go";

const card = (props) => {
  let github = null;

  if (props.github) {
    github = (
      <a href={props.github} target="_blank">
        <GoMarkGithub />
      </a>
    );
  }

  return (
    <div className={classes.Card}>
      <h3 className={classes.Title}>{props.title}</h3>
      <div className={classes.Content}>
        <div className={classes.Container}>
          <img className={classes.Image} src={props.image} />
          <div className={classes.Overlay}>
            <div className={classes.Icon}>{github}</div>
          </div>
        </div>
        <div className={classes.TextContent}>{props.subtext}</div>
      </div>
    </div>
  );
};

export default card;
