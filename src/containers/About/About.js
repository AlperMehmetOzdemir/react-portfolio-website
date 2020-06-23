import React from "react";

import classes from "./About.module.css";
// import AlternatingText from "../../components/AlternatingText/AlternatingText";
import PortraitPhoto from "../../assets/images/portraitPhoto.jpg";

const about = (props) => {
  const interests = [
    "web application development",
    "software application development",
    "video game development",
  ];

  return (
    <section className={classes.About}>
      <h2>About Me</h2>
      <div className={classes.LineBreak} />
      <div className={classes.Content}>
        <img src={PortraitPhoto} alt="Portrate of Alper Mehmet Özdemir" />
        <div className={classes.ContentText}>
          <p>
            Hello! I'm Mehmet, a 4th year computer engineer student in Bilkent
            University
          </p>
          <p>
            I enjoy learning new technologies and creating / analyzing apps and
            video games that have innovative and intuitive design. I aim to keep
            improving myself as a computer engineer with a focus on web
            development and build products that others will enjoy using
          </p>
        </div>
      </div>
    </section>
  );
};

export default about;
