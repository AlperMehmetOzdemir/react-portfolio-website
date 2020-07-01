import React, { Fragment } from "react";
import { Element } from "react-scroll";

const scrollElement = (props) => {
  return (
    <Fragment>
      <Element id={props.elementId} name={props.elementName}>
        {props.children}
      </Element>
    </Fragment>
  );
};

export default scrollElement;
