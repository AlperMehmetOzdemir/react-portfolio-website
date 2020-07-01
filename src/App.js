import React, { Component } from "react";

//css
import classes from "./App.module.css";

// hoc
import ScrollElement from "./hoc/ScrollElement";

// components
import Layout from "./components/Layout/Layout";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Skills from "./containers/Skills/Skills";
import Projects from "./containers/Projects/Projects";
import Contact from "./containers/Contact/Contact";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <ScrollElement elementId="home" elementName="home">
            <Home />
          </ScrollElement>
          <ScrollElement elementId="about" elementName="about">
            <About />
          </ScrollElement>
          <ScrollElement elementId="skills" elementName="skills">
            <Skills />
          </ScrollElement>
          <ScrollElement elementId="projects" elementName="projects">
            <Projects />
          </ScrollElement>
          <ScrollElement elementId="contact" elementName="contact">
            <Contact />
          </ScrollElement>
        </Layout>
      </div>
    );
  }
}

export default App;
