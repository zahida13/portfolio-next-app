import React from "react";
import classes from "./services.module.css";
import { FaReact } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { BsCodeSlash } from "react-icons/bs";

const services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className={`container ${classes.services__container}`}>
        <article className={classes.services}>
          <div className={classes.service__head}>
            <MdDesignServices className={classes.service__head__icon} />
          </div>
          <div className={classes.service__details}>
            <h3>UI Design</h3>
            <p> UI desinging in Figma and Adobe XD.</p>
          </div>
        </article>

        {/*  END OF UI DESIGN */}
        <article className={classes.services}>
          <div className={classes.service__head}>
            <BsCodeSlash className={classes.service__head__icon} />
          </div>
          <div className={classes.service__details}>
            <h3>Web Design</h3>
            <p> Frontend desinging with HTML, CSS, Javascript and Bootstrap.</p>
          </div>
        </article>

        {/* END OF WEB DESIGNING */}
        <article className={classes.services}>
          <div className={classes.service__head}>
            <FaReact className={classes.service__head__icon} />
          </div>
          <div className={classes.service__details}>
            <h3>React JS</h3>
            <p> Frontend Development With React JS</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default services;
