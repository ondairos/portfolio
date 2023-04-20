import React from "react";
import "../App.css";
import iconPhoto from "../assets/IconPhotoPX.jpg";

const About = () => {
  return (
    <div id="sect1" className="box section1">
      <div className="section1_textAbout">
        <div className="section1_pic_div">
          <img src={iconPhoto} alt="" className="section1_pic" />
        </div>
        <p className="section1_text">
          Hi, I am <span className="section_name_span">John.</span> <br />
          I'm a Junior Full Stack Developer <br /> passionate about creating
          interactive and cool applications.
        </p>
      </div>
      <div className="section1_socials">
        <p className="section1_socials_l">
          LinkedIn | Twitter | Instagram | Github
        </p>
      </div>
    </div>
  );
};

export default About;
