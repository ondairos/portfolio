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
          Hi, I am John. <br />
          I'm a Junior Full Stack Developer using the MERN Stack and building
          cool and elegant applications.
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint eum
          dolor quam, earum amet sit porro eius esse natus. Laborum non ab
          excepturi sapiente fugit? Porro accusantium voluptates assumenda quia!
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
