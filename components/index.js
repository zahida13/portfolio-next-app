import React from "react";
import Header from "./header/index";
import Nav from "./nav/index";
import About from "./about/index";
import Experience from "./experience/index";

import Services from "./services/index";
import Portfolio from "./portfolio/index";
import Contact from "./contact/index";
import Footer from "./footer/index";
import classes from "./styles/styles.module.css";

const MainApp = () => {
  return (
    <div className={classes.global}>
      <Header />
      <Nav />
      <About />
      <Experience />

      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default MainApp;
