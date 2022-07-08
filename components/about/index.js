import React from "react";
import classes from "./about.module.css";
import Image from "next/image";
import Me from "../../public/me-about.jpg";
import { SiXdadevelopers } from "react-icons/si";
import { BsFillFolderFill } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2 className={classes.h2}>About Me</h2>
      <div className={`container ${classes.about__container}`}>
        <div className={classes.about__me}>
          <div className={classes.about__me_image}>
            <Image src={Me} alt="me" />
          </div>
        </div>
        <div className={classes.about__content}>
          <div className={classes.about_cards}>
            <article className={classes.about_card}>
              <SiXdadevelopers className={classes.about_icon} />
              <h5>Experties</h5>
              <small>React/Next js Developer </small>
            </article>
            <article className={classes.about_card}>
              <BsFillFolderFill className={classes.about_icon} />
              <h5>Projects</h5>
              <small>10+ Learning Projects</small>
            </article>
          </div>

          <p>
            Starting a new start-up? New business? Definitely looking for a good
            website to start with then you’re at the right place at right time.
            I’m an experienced full-stack web developer with experience of two
            years. Work experience on Fiverr with various clients. I have
            command on Html CSS JavaScript React Redux Next Git Firebase Here
            you can find my previous work. Now even if you’re visiting this
            portfolio website you can observe my work very well and how I can be
            beneficial to you in this regard.
          </p>
          <a href="#contact" className="btn-primary btn">
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
