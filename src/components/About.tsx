import React from "react";
import "../App.css";
import iconPhoto from "../assets/IconPhotoPX.jpg";

const About = () => {
  return (
    <div id="sect1" className="box section1">
      <div className="section1_textAbout">
        <img src={iconPhoto} alt="" className="section1_pic" />
        <p className="section1_text">
          Hi, I am <span className="section_name_span">John.</span> <br />
          I'm a Junior Full Stack Developer <br /> passionate about creating
          interactive and cool applications.
        </p>
      </div>
      <div className="section1_socials">
        <p className="section1_socials_l">
          <a
            href="https://www.linkedin.com/in/ioannis-kantiloros-2438b6153/"
            className="section1_linkedin"
          >
            LinkedIn
          </a>{" "}
          |{" "}
          <a href="https://github.com/ondairos" className="section1_github">
            GitHub
          </a>{" "}
          |{" "}
          <a href="https://twitter.com/Ondairos" className="section1_twitter">
            Twitter
          </a>{" "}
          |{" "}
          <a
            href="https://www.instagram.com/giannis_kanti/"
            className="section1_instagram"
          >
            Instagram
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
