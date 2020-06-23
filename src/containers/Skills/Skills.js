import React from "react";

import classes from "./Skills.module.css";

import { BsChevronDoubleRight } from "react-icons/bs";

const Skills = () => {
  return (
    <section className={classes.Skills}>
      <h2>Skills</h2>
      <div className={classes.LineBreak} />
      <p>
        I enjoy learning new technologies. Whether it be about web apps, UI/UX
        design or video game development.
      </p>
      <div>
        <div>
          <h3>Web development</h3>
          <ul>
            <li>
              <BsChevronDoubleRight />
              React.js
            </li>
            <li>
              <BsChevronDoubleRight />
              JavaScript
            </li>
            <li>
              <BsChevronDoubleRight />
              HTML5
            </li>
            <li>
              <BsChevronDoubleRight />
              CSS
            </li>
          </ul>
        </div>
        <div>
          <h3>Programming</h3>
          <ul>
            <li>
              <BsChevronDoubleRight />
              Python
            </li>
            <li>
              <BsChevronDoubleRight />
              Java
            </li>
            <li>
              <BsChevronDoubleRight />
              C#
            </li>
            <li>
              <BsChevronDoubleRight />
              C++
            </li>
            <li>
              <BsChevronDoubleRight />
              SQL
            </li>
          </ul>
        </div>
        <div>
          <h3>Others</h3>
          <ul>
            <li>
              <BsChevronDoubleRight />
              Unity
            </li>
            <li>
              <BsChevronDoubleRight />
              UML
            </li>
            <li>
              <BsChevronDoubleRight />
              Git / Github
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
