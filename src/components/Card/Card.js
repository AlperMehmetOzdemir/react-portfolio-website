import React from "react";

import classes from "./Card.module.css";
import { GoMarkGithub } from "react-icons/go";

const card = (props) => {
  let github = null;
  const gitAlt = "This is a link to " + props.title + "'s github repository";

  if (props.github) {
    github = (
      <a
        href={props.github}
        target="_blank"
        rel="noopener noreferrer"
        alt={gitAlt}
      >
        <GoMarkGithub />
      </a>
    );
  }

  console.log(props.imgAlt);

  return (
    <div className={classes.Card}>
      <h3 className={classes.Title}>{props.title}</h3>
      <div className={classes.Content}>
        <div className={classes.Container}>
          <img className={classes.Image} src={props.image} alt={props.imgAlt} />
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
