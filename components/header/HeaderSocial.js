import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import classes from "./header.module.css";

const HeaderSocial = () => {
  return (
    <div className={classes.header__socials}>
      <a
        href="https://www.linkedin.com/in/zahida-ilyas-668ba01b4"
        target="_blank"
      >
        <BsLinkedin size={30} />
      </a>
      <a href="https://github.com/zahida13 " target="_blank">
        {" "}
        <FaGithub size={30} />{" "}
      </a>
      <a href="https://www.facebook.com/kainat.ilyas.56" target="_blank">
        {" "}
        <BsFacebook size={30} />{" "}
      </a>
    </div>
  );
};

export default HeaderSocial;
