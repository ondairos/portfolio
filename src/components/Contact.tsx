import React from "react";
import "../App.css";

const Contact = () => {
  return (
    <div id="sect4" className="box section4">
      <section className="contact">
        <div className="contact-form">
          <h1>
            Contact <span>Me</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            voluptatibus architecto, hic totam dignissimos veniam? Sit sapiente
            quod aperiam quia atque maxime, placeat cumque eligendi porro, unde
            veniam dignissimos dicta.
          </p>
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
