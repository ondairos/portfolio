import React from "react";
import "../App.css";

const NavBar = () => {
  return (
    <div className="box nav">
      <nav id="navId" className="navMenu">
        <a href="#sect1">About</a>
        <a href="#sect2">Projects</a>
        <a href="#sect3">Tech Stack</a>
        <a href="#sect4">Contact</a>
        <div className="dot"></div>
      </nav>
    </div>
  );
};

export default NavBar;
