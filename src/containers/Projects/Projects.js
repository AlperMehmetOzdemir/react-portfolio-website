import React from "react";

import classes from "./Projects.module.css";

import Card from "../../components/Card/Card";

import ColorShooterImage from "../../assets/images/ColorShooter.jpg";
import ReactPortfolioImage from "../../assets/images/ReactPortfolio.jpg";

const Projects = () => {
  return (
    <section className={classes.Projects}>
      <h2>
        <span className={classes.Underline}>Projects</span>
      </h2>
      <div className={classes.ProjectContainer}>
        <Card
          title="React Protfolio Site"
          image={ReactPortfolioImage}
          imgAlt="A screenshot of the Home section of the React Portfolio Site"
          github="https://github.com/AlperMehmetOzdemir/react-portfolio-website"
          subtext="It's the site you are currently on. This my first portfolio website built with React.js"
        />
        <Card
          title="Color Shooter"
          image={ColorShooterImage}
          imgAlt="A screenshot of the first level of Color Shooter"
          github="https://github.com/erdemadacal/CS319_Group3F"
          subtext="This is a platformer game made with Java following the MVC architecture."
        />
      </div>
    </section>
  );
};

export default Projects;
