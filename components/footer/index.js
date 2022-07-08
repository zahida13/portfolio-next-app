import React from "react";
import classes from "./footer.module.css";
import { AiOutlineMail } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
const index = () => {
  return (
    <footer className={classes.footer}>
      <a href="#" className={classes.footer__logo}>
        Zahida Ilyas
      </a>
      <ul className={classes.permalinks}>
        <li>
          {" "}
          <a href="#">Home</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#about">About</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#services">Services</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#experience">Experties</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#portfolio">Portfolio</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#contact">Contact</a>{" "}
        </li>
      </ul>
      <div className={classes.footer__social}>
        <a href="facebook.com">
          <BsFacebook />{" "}
        </a>
        <a href="facebook.com">
          <BsWhatsapp />{" "}
        </a>
        <a href="mailto:zahi.ilyas340@gmail.com">
          <AiOutlineMail />{" "}
        </a>
      </div>
    </footer>
  );
};

export default index;
