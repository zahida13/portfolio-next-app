import React from "react";
import classes from "./portfolio.module.css";
import img1 from "../../public/portfolio1.jpg";
import Image from "next/image";
import { details } from "./files";
const index = () => {
  return (
    <section id="portfolio">
      <h5>Reacent Work</h5>
      <h2>Portfolio</h2>
      <div className={`container ${classes.portfolio__container}`}>
        {/* ?\item 2 */}
        {details.map(({ id, text, img, github, visit }) => {
          return (
            <article key={id} className={classes.portfolio__item}>
              <div className={classes.portfolio__item_img}>
                <Image src={img} />
              </div>
              <h3>{text}</h3>
              <div className={classes.portfolio__item_cta}>
                <a href={github} className="btn">
                  Github
                </a>
                <a href={visit} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}

        {/* 3 */}
      </div>
    </section>
  );
};

export default index;
