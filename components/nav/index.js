import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { BsAward } from "react-icons/bs";

import classes from "./nav.module.css";
const index = () => {
  const [active, setActive] = useState("#");

  return (
    <nav className={classes.nav}>
      <a
        href="#"
        onClick={() => setActive("#")}
        className={active === "#" ? classes.active : ""}
      >
        <AiFillHome size={30} />{" "}
      </a>

      <a
        href="#about"
        onClick={(e) => setActive("#about")}
        className={active === "#about" ? classes.active : ""}
      >
        <AiOutlineUser size={30} />{" "}
      </a>
      <a
        href="#experience"
        onClick={(e) => setActive("#experience")}
        className={active === "#experience" ? classes.active : ""}
      >
        <BsAward size={30} />{" "}
      </a>
      <a
        href="#services"
        onClick={(e) => setActive("#services")}
        className={active === "#services" ? classes.active : ""}
      >
        <RiServiceLine size={30} />{" "}
      </a>

      <a
        href="#contact"
        onClick={(e) => setActive("#contact")}
        className={active === "#contact" ? classes.active : ""}
      >
        <BiMessageSquareDetail size={30} />{" "}
      </a>
    </nav>
  );
};

export default index;
