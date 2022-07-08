import React from "react";
import classes from "./contact.module.css";
import { AiOutlineMail } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className={`container ${classes.contact_container}`}>
        <div className={classes.contact__options}>
          <article className={classes.contact__option}>
            <AiOutlineMail className={classes.contact_option_icon} />
            <h4>Email</h4>
            <h5>zahi.ilyas340@gmail.com</h5>
            <a href="mailto: zahi.ilyas340@gmail.com" target="_blank">
              Send A Message
            </a>
          </article>

          {/* facebook */}

          <article className={classes.contact__option}>
            <RiMessengerLine className={classes.contact_option_icon} />
            <h4>Facebook</h4>
            <h5>Zahida Ilyas</h5>
            <a href="https://www.facebook.com/kainat.ilyas.56" target="_blank">
              Send A Message
            </a>
          </article>

          {/* whatsapp */}

          <article className={classes.contact__option}>
            <BsWhatsapp className={classes.contact_option_icon} />
            <h4>Whatsapp</h4>
            <h5>+923257660731</h5>
            <a href="https://wa.me/+923257660731" target="_blank">
              Send A Message
            </a>
          </article>
        </div>

        <form action="" className={classes.form}>
          <input
            type="text"
            className={classes.input}
            name="name"
            placeholder="your full name"
            required
          />
          <input
            type="email"
            className={classes.input}
            name="email"
            placeholder="your email"
            required
          />
          <textarea
            name="your message "
            id=""
            className={classes.textarea}
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
