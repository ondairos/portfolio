import React from "react";
import "../App.css";
import email_icon from "../assets/tsicons/email-envelop-open-icon.svg";
import linkedin_icon from "../assets/tsicons/linkedin-square-icon.svg";

const Contact = () => {
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
          <form action="">
            <input type="text" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              id=""
              placeholder="E-mail"
              required
            />
            <input type="" placeholder="Write a Subject" required />
            <textarea
              name=""
              id=""
              cols={parseInt("30")}
              rows={parseInt("10")}
              placeholder="Your Message"
              required
            ></textarea>
            <input type="submit" name="" value="Submit" className="btn" />
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
