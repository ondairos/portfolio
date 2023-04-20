import React from "react";
import "../App.css";
import tenzies_shot from "../assets/tenzies_screen.jpg";
import hs_shot from "../assets/hs_screen.jpg";
import flick_shot from "../assets/flick_screen.jpg";

const Projects = () => {
  return (
    <div id="sect2" className="box section2">
      <h1 className="section2_header">Projects:</h1>
      <div className="sect2_container">
        <div className="sect2_product">
          <img src={tenzies_shot} alt="Project 1"></img>
          <h3>Tenzies Dice Game</h3>
          <p>Github Link</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id fugit
            ratione maiores dolore repudiandae in natus temporibus voluptates
            dicta asperiores consequuntur animi, minus nesciunt voluptatem rem
            magnam sequi, officia nemo.
          </p>
        </div>
        <div className="sect2_product">
          <img src={hs_shot} alt="Project 2"></img>
          <h3>Hearthstone Festival of Legends</h3>
          <p>Github Link</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id fugit
            ratione maiores dolore repudiandae in natus temporibus voluptates
            dicta asperiores consequuntur animi, minus nesciunt voluptatem rem
            magnam sequi, officia nemo.
          </p>
        </div>
        <div className="sect2_product">
          <img src={flick_shot} alt="Project 3"></img>
          <h3>Project 3</h3>
          <p>Github Link</p>
        </div>
        <div className="sect2_product">
          <img src="https://via.placeholder.com/250x250" alt="Project 4"></img>
          <h3>Project 4</h3>
          <p>Github Link</p>
        </div>
        <div className="sect2_product">
          <img src="https://via.placeholder.com/250x250" alt="Project 5"></img>
          <h3>Project 5</h3>
          <p>Github Link</p>
        </div>
        <div className="sect2_product">
          <img src="https://via.placeholder.com/250x250" alt="Project 6"></img>
          <h3>Project 6</h3>
          <p>Github Link</p>
        </div>
        <div className="sect2_product">
          <img src="https://via.placeholder.com/250x250" alt="Project 7"></img>
          <h3>Project 7</h3>
          <p>Github Link</p>
        </div>
        <div className="sect2_product">
          <img src="https://via.placeholder.com/250x250" alt="Project 8"></img>
          <h3>Project 8</h3>
          <p>Github Link</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
