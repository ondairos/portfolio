import React, { useRef } from "react";
import "../App.css";
import email_icon from "../assets/tsicons/email-envelop-open-icon.svg";
import linkedin_icon from "../assets/tsicons/linkedin-square-icon.svg";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const USER_ID = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  // @ts-expect-error type emailjs
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        // @ts-expect-error type
        form.current,
        USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="sect4" className="section4">
      <section className="contact">
        <div className="contact-form">
          <h1>
            Contact <span>Me</span>
          </h1>
          <div className="contact-form_info_main_container">
            <div className="contant-form_info_container">
              <img
                src={email_icon}
                alt="Email icon"
                className="contact_email_icon"
              />
              <p>
                <a href="mailto:jkantiloros@gmail.com">
                  jkantiloros[at]gmail.com
                </a>
              </p>
            </div>
            <div className="contant-form_info_container">
              <img
                src={linkedin_icon}
                alt="linkedin icon"
                className="contact_linkedin_icon"
              />
              <p>
                <a href="https://www.linkedin.com/in/ioannis-kantiloros-2438b6153/">
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              placeholder="Your Name"
              name="to_name"
              required
            />
            <input
              type="email"
              name="from_name"
              placeholder="E-mail"
              required
            />
            <textarea
              name="message"
              cols={parseInt("30")}
              rows={parseInt("10")}
              placeholder="Your Message"
              required
            ></textarea>
            <input type="submit" value="Send" className="btn" />
          </form>
          <div className="contact-img">
            <s></s>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
