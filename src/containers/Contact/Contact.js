import React from "react";

import classes from "./Contact.module.css";
import ContactButton from "../../components/ContactButton/ContactButton";

const contact = () => {
  return (
    <section className={classes.Contact}>
      <h2>Contact</h2>
      <div className={classes.LineBreak} />
      <p>
        I am looking for remote intern / part-time positions at the moment and
        full-time positions after I graduate in January 2021.
      </p>
      <ContactButton color="#80e7f2" email="amehmet97@hotmail.com">
        Get in touch
      </ContactButton>
    </section>
  );
};

export default contact;
