import React from "react";

import classes from "./About.module.css";

const about = (props) => {
  return (
    <section className={classes.About} id="about">
      <h2>
        <span className={classes.Underline}>About Me</span>
      </h2>
      <div className={classes.Content}>
        <p>
          Hello! I'm Mehmet, a 4th year computer engineer student in Bilkent
          University.
        </p>
        <p>
          I enjoy learning new technologies and creating / analyzing apps and
          video games that have innovative and intuitive design. I aim to keep
          improving myself as a computer engineer with a focus on web
          development and build products that others will enjoy using.
        </p>
      </div>
    </section>
  );
};

export default about;
