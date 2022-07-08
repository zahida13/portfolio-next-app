import React from "react";
import classes from "./header.module.css";
import CTA from "./cta";
import ME from "../../public/me.png";
import Image from "next/image";
import HeaderSocial from "./HeaderSocial";

const index = () => {
  return (
    <header className={classes.header}>
      <div className={`container ${classes.header_container}`}>
        <h5>Hello I'm</h5>
        <h1>Zahida ILyas</h1>
        <h5 className="text-light">Frontend React Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className={classes.me}>
          <Image src={ME} alt="zahida ilyas" />
        </div>
        <a href="#contact" className={classes.scroll__down}>
          Scroll Down{" "}
        </a>
      </div>
    </header>
  );
};

export default index;
