import React from "react";

import classes from "./About.module.css";
import PortraitPhoto from "../../assets/images/portraitPhoto.jpg";

const about = (props) => {
  return (
    <section className={classes.About}>
      <h2>
        <span className={classes.Underline}>About Me</span>
      </h2>
      <div className={classes.Content}>
        <p className={classes.Text1}>
          Hello! I'm Mehmet, a 4th year computer engineer student in Bilkent
          University.
        </p>
        <p className={classes.Text2}>
          I enjoy learning new technologies and creating / analyzing apps and
          video games that have innovative and intuitive design. I aim to keep
          improving myself as a computer engineer with a focus on web
          development and build products that others will enjoy using.
        </p>
        <img
          className={classes.Img}
          src={PortraitPhoto}
          alt="Portrait photo of Alper Mehmet Özdemir"
        />
      </div>
    </section>
  );
};

export default about;
