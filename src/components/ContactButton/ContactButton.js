import React from "react";

import classes from "./ContactButton.module.css";

const contactButton = (props) => {
  const styles = {
    color: props.color,
    borderColor: props.color,
  };

  const mail = "mailto:" + props.email;

  return (
    <div>
      <a
        className={classes.ContactButton}
        style={styles}
        href={mail}
        target="_blank"
      >
        {props.children}
      </a>
    </div>
  );
};

export default contactButton;
