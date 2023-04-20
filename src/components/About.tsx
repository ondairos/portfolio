import React from "react";
import "../App.css";
import iconPhoto from "../assets/IconPhotoPX.jpg";

const About = () => {
  return (
    <div id="sect1" className="box section1">
      <div className="section1_textAbout">
        <div className="section1_pic_div"></div>
        <img src={iconPhoto} alt="" className="section1_pic" />
        <p className="section1_text">
          Hi, I am John. <br />
          I'm a Junior Full Stack Developer using the MERN Stack and building
          cool and elegant applications. I'm currently working at Lorem Ipsum.
        </p>
      </div>
      <div className="section1_socials">
        <p>LinkedIn Twitter Instagram Facebook</p>
      </div>
    </div>
  );
};

export default About;
