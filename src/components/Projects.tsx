import React from "react";
import "../App.css";
import tenzies_shot from "../assets/tenzies_screen.jpg";
import hs_shot from "../assets/hs_screen.jpg";
import flick_shot from "../assets/flick_screen.jpg";
import note_shot from "../assets/Notes_screen.jpg";
import travel_shot from "../assets/travel_screen.jpg";

const Projects = () => {
  return (
    <div id="sect2" className="box section2">
      <h1 className="section2_header">Projects</h1>
      <div className="sect2_container">
        <div className="sect2_product">
          <img src={hs_shot} alt="Project 2"></img>
          <div className="sect2_product_info">
            <h3>Hearthstone Festival of Legends</h3>
            <p>
              <a href="https://github.com/ondairos/Festival_of_Legends_Cards">
                Github
              </a>{" "}
              <a href="https://luxury-taffy-98aa2d.netlify.app/">Live</a>
            </p>
            <p>
              This is a FullStack web application that displays all the new card
              content for an upcoming card game expansion. Using a custom made
              REST API endpoint data is served to a React application that
              displays it, filtered by classes.
            </p>
            <p className="sect2_tags">
              <span className="s_tag">NodeJS</span>
              <span className="s_tag">ExpressJS</span>
              <span className="s_tag">ReactJS</span>
              <span className="s_tag">Typescript</span>
              <span className="s_tag">Axios</span>
              <span className="s_tag">REST</span>
              <span className="s_tag">HTML</span>
              <span className="s_tag">CSS</span>
            </p>
          </div>
        </div>
        <div className="sect2_product">
          <img src={flick_shot} alt="Project 3"></img>
          <div className="sect2_product_info">
            <h3>Flick Movie Search</h3>
            <p>Movie Search App, utilizing ReactJS and OMDb API.</p>
            <a href="https://github.com/ondairos/react_movie_project">
              Github
            </a>{" "}
            <a href="https://react-movie-deploy.vercel.app/">Live</a>
            <p className="sect2_tags">
              <span className="s_tag">ReactJS</span>{" "}
              <span className="s_tag">Javascript</span>
              <span className="s_tag">OMDb API</span>
              <span className="s_tag">HTML</span>
              <span className="s_tag">CSS</span>
            </p>
          </div>
        </div>

        <div className="sect2_product">
          <img src={note_shot} alt="Project 4"></img>
          <div className="sect2_product_info">
            <h3>Notes Project</h3>
            <p>
              Notes Project is a simple Markdown note-taking app built with
              React. It allows users to create, edit and save notes in Markdown
              format.
            </p>
            <a href="https://github.com/ondairos/notes_project">Github</a>{" "}
            <a href="">Live</a>
            <p className="sect2_tags">
              ReactJS,React Split,Showdown, Javascript, HTML, CSS
            </p>
          </div>
        </div>

        <div className="sect2_product">
          <img src={tenzies_shot} alt="Project 1"></img>
          <div className="sect2_product_info">
            <h3>Tenzies Dice Game</h3>
            <p>
              <a href="https://github.com/ondairos/tenzies_game">Github</a>{" "}
              <a href="https://majestic-starship-884e43.netlify.app/">Live</a>
            </p>
            <p>
              A dice game that allows players to roll the dice and keep track of
              their scores.
            </p>
            <p className="sect2_tags">ReactJS, Javascript, HTML, CSS</p>
          </div>
        </div>

        <div className="sect2_product">
          <img src={travel_shot} alt="Project 5"></img>
          <h3>Travel Journal</h3>
          <p>
            Travel Journal app created for displaying personal visits to
            international destinations.
          </p>
          <a href="https://github.com/ondairos/React_Travel_Guide">Github</a>{" "}
          <a href="https://celadon-clafoutis-93bebf.netlify.app/">Live</a>
          <p className="sect2_tags">ReactJS, HTML, CSS</p>
        </div>

        <div className="sect2_product">
          <img src="https://via.placeholder.com/250x250" alt="Project 6"></img>
          <h3>Project 6</h3>
          <a href="">Github</a> <a href="">Live</a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
