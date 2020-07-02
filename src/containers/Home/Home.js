import React from "react";
import { Link } from "react-scroll";
import { BsChevronDown } from "react-icons/bs";

import classes from "./Home.module.css";
import ContactButton from "../../components/ContactButton/ContactButton";
// import AlternatingText from "../../components/AlternatingText/AlternatingText";

const home = (props) => {
  return (
    <section className={classes.Home}>
      <h3 className={classes.Greeting}>Hi, I'm</h3>
      <h1 className={classes.Name}>Alper Mehmet Özdemir</h1>
      <h1 className={classes.Introduction}>And I'm a software engineer</h1>

      <p className={classes.Subtext}>
        I'm a 4th year computer engineering student at Bilkent University who is
        interested in web development.
      </p>

      <ContactButton
        color="#80e7f2"
        email="amehmet97@hotmail.com"
        className={classes.CallToAction}
      >
        Get in touch
      </ContactButton>
      <Link
        to="about"
        spy={true}
        smooth={true}
        duration={500}
        className={classes.ToAbout}
      >
        <BsChevronDown />
      </Link>
    </section>
  );
};

export default home;
