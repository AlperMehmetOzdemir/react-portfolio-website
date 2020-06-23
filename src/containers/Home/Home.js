import React from "react";

import classes from "./Home.module.css";
import AlternatingText from "../../components/AlternatingText/AlternatingText";

const home = (props) => {
  const interests = [
    "web application development",
    "software application development",
    "video game development",
  ];

  return (
    <section className={classes.Home}>
      <h3 className={classes.Greeting}>Hi, I'm</h3>
      <h1 className={classes.Name}>Alper Mehmet Özdemir</h1>
      <h1 className={classes.Introduction}>And I'm a software engineer</h1>

      <p className={classes.Subtext}>
        I'm a 4th year computer engineering student at Bilkent University
        interested in web app development.
      </p>
    </section>
  );
};

export default home;
