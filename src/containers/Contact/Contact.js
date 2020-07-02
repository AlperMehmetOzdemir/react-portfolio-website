import React from "react";

import classes from "./Contact.module.css";
import { GoMarkGithub } from "react-icons/go";
import { FiMail } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";

const contact = () => {
  return (
    <section className={classes.Contact}>
      <h2>
        <span className={classes.Underline}>Contact</span>
      </h2>
      <p>
        I am looking for remote intern/ part-time positions at the moment and
        full-time positions after I graduate in January 2021.
      </p>

      <div>
        <ul>
          <li>
            <a
              href="mailto:amehmet97@hotmail.com"
              target="_blank"
              rel="noreferrer noopener"
              className={classes.Link}
            >
              <FiMail className={classes.Icon} />
              amehmet97@hotmail.com
            </a>
          </li>
          <li>
            <a
              href="https://github.com/AlperMehmetOzdemir"
              target="_blank"
              rel="noreferrer noopener"
              className={classes.Link}
            >
              <GoMarkGithub className={classes.Icon} />
              AlperMehmetOzdemir
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/alper-mehmet-%C3%B6zdemir-6a66b212a/"
              target="_blank"
              rel="noreferrer noopener"
              className={classes.Link}
            >
              <AiOutlineLinkedin className={classes.Icon} />
              Alper Mehmet Özdemir
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default contact;
