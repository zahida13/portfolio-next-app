import React from "react";
import classes from "./header.module.css";
const cta = () => {
  return (
    <div className={classes.cta}>
      <a href="" download className="btn">
        Donwnload CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default cta;
