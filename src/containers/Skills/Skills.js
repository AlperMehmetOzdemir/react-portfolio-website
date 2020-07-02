import React from "react";

import classes from "./Skills.module.css";

import { BsChevronDoubleRight } from "react-icons/bs";

const Skills = () => {
  return (
    <section className={classes.Skills}>
      <h2>
        <span className={classes.Underline}>Skills</span>
      </h2>
      <p>
        I enjoy learning new technologies. Whether it be about web apps, UI/UX
        design or video game development. Here are some of what I work with.
      </p>
      <div className={classes.SkillLists}>
        <div className={classes.Web}>
          <h3>Web development</h3>
          <ul>
            <li>
              <BsChevronDoubleRight className={classes.Icon} /> React.js
            </li>
            <li>
              <BsChevronDoubleRight className={classes.Icon} /> JavaScript
            </li>
            <li>
              <BsChevronDoubleRight className={classes.Icon} /> HTML5
            </li>
            <li>
              <BsChevronDoubleRight className={classes.Icon} /> CSS
            </li>
            <li>
              <BsChevronDoubleRight className={classes.Icon} /> Nuxt.js
            </li>
          </ul>
        </div>
        <div className={classes.Prog}>
          <h3>Programming</h3>
          <ul>
            <li>
              <BsChevronDoubleRight className={classes.Icon} /> Python
            </li>
            <li>
              <BsChevronDoubleRight className={classes.Icon} /> Java
            </li>
            <li>
              <BsChevronDoubleRight className={classes.Icon} /> C#
            </li>
            <li>
              <BsChevronDoubleRight className={classes.Icon} /> C++
            </li>
            <li>
              <BsChevronDoubleRight className={classes.Icon} /> SQL
            </li>
          </ul>
        </div>
        <div className={classes.Other}>
          <h3>Other Skills</h3>
          <ul>
            <li>
              <BsChevronDoubleRight className={classes.Icon} /> Unity
            </li>
            <li>
              <BsChevronDoubleRight className={classes.Icon} /> ELK Stack
            </li>
            <li>
              <BsChevronDoubleRight className={classes.Icon} /> UML
            </li>
            <li>
              <BsChevronDoubleRight className={classes.Icon} /> Git / Github
            </li>
            {/* <li>
              <BsChevronDoubleRight /> Figma
            </li> */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
