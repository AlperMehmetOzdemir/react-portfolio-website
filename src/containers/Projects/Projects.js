import React from "react";

import classes from "./Projects.module.css";
import Card from "../../components/Card/Card";
import ColorShooterImage from "../../assets/images/ColorShooter.png";

const Projects = () => {
  return (
    <section className={classes.Projects}>
      <h2>Projects</h2>
      <div className={classes.LineBreak} />
      <div className={classes.ProjectContainer}>
        <Card
          title="React Protfolio Site"
          image={ColorShooterImage}
          github="https://github.com/AlperMehmetOzdemir/react-portfolio-website"
          subtext="It's the site you are currently on. This my first portfolio website built with React.js"
        />
        <Card
          title="Color Shooter"
          image={ColorShooterImage}
          github="https://github.com/erdemadacal/CS319_Group3F"
          subtext="This is a platformer game made with Java following the MVC architecture."
        />
      </div>
    </section>
  );
};

export default Projects;
