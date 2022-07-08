import React from "react";
import classes from "./experience.module.css";
import { HiBadgeCheck } from "react-icons/hi";

const index = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2 className={classes.h2}>Me Experience</h2>

      <div className={`container ${classes.experience__container}`}>
        <div className={classes.experience__frontend}>
          <h3>Frontend Development</h3>
          <div className={classes.experience__content}>
            <article className={classes.experience__details}>
              <HiBadgeCheck className={classes.experience__details_icon} />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className={classes.experience__details}>
              <HiBadgeCheck className={classes.experience__details_icon} />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className={classes.experience__details}>
              <HiBadgeCheck className={classes.experience__details_icon} />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className={classes.experience__details}>
              <HiBadgeCheck className={classes.experience__details_icon} />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className={classes.experience__details}>
              <HiBadgeCheck className={classes.experience__details_icon} />
              <div>
                <h4>Material UI</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className={classes.experience__details}>
              <HiBadgeCheck className={classes.experience__details_icon} />
              <div>
                <h4>React JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className={classes.experience__details}>
              <HiBadgeCheck className={classes.experience__details_icon} />
              <div>
                <h4>Redux</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className={classes.experience__details}>
              <HiBadgeCheck className={classes.experience__details_icon} />
              <div>
                <h4>Next JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className={classes.experience__backend}>
          <h3>Other Skills</h3>
          <article className={classes.experience__details}>
            <HiBadgeCheck className={classes.experience__details_icon} />
            <div>
              <h4>MySQL</h4>
              <small className="text-light">Basic</small>
            </div>
          </article>

          <article className={classes.experience__details}>
            <HiBadgeCheck className={classes.experience__details_icon} />
            <div>
              <h4>Python</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>

          <article className={classes.experience__details}>
            <HiBadgeCheck className={classes.experience__details_icon} />
            <div>
              <h4>Git</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>

          <article className={classes.experience__details}>
            <HiBadgeCheck className={classes.experience__details_icon} />
            <div>
              <h4>Firebase</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default index;
