import React, { Component } from "react";

import classes from "./App.module.css";
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
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </Layout>
      </div>
    );
  }
}

export default App;
