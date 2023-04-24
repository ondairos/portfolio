import React from "react";
import "../App.css";

const Contact = () => {
  return (
    <div id="sect4" className="box section4">
      <section className="contact">
        <div className="contact-form">
          <h1>
            Contact <span>me</span>
          </h1>
          <h5>Email: jkantiloros [at] gmail.com</h5>
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
