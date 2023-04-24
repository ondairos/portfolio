import React from "react";
import "../App.css";
import github_icon from "../assets/tsicons/github-icon.svg";
import live_icon from "../assets/tsicons/website-layout-icon.svg";
import tenzies_shot from "../assets/tenzies_screen.jpg";
import hs_shot from "../assets/hs_screen.jpg";
import flick_shot from "../assets/flick_screen.jpg";
import note_shot from "../assets/Notes_screen.jpg";
import travel_shot from "../assets/travel_screen.jpg";
import digital_card_shot from "../assets/digital_card_screen.jpg";

const Projects = () => {
  return (
    <div id="sect2" className="box section2">
      <h1 className="section2_header">Projects</h1>
      <div className="sect2_container">
        <div className="sect2_product">
          <img
            className="sect2_product_img"
            src={hs_shot}
            alt="Project 2"
          ></img>
          <div className="sect2_product_info">
            <h3 className="sect2_header_h3">Festival of Legends</h3>
            <div className="sect2_links_container">
              <a href="https://github.com/ondairos/Festival_of_Legends_Cards">
                <img
                  className="sect2_github_icon"
                  src={github_icon}
                  alt="github"
                ></img>
              </a>

              <a href="https://luxury-taffy-98aa2d.netlify.app/">
                <img className="sect2_github_icon" src={live_icon} alt="live" />
              </a>
            </div>
            <p className="sect2_descr">
              This is a FullStack web application that displays all the new card
              content for an upcoming card game expansion.<br></br> Using a
              custom made REST API endpoint data is served to a React
              application that displays it, filtered by classes.
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
          <img
            className="sect2_product_img"
            src={flick_shot}
            alt="Project 3"
          ></img>
          <div className="sect2_product_info">
            <h3 className="sect2_header_h3">Flick Movie Search</h3>
            <div className="sect2_links_container">
              <a href="https://github.com/ondairos/react_movie_project">
                <img
                  className="sect2_github_icon"
                  src={github_icon}
                  alt="github"
                ></img>
              </a>{" "}
              <a href="https://react-movie-deploy.vercel.app/">
                <img className="sect2_github_icon" src={live_icon} alt="live" />
              </a>
            </div>
            <p className="sect2_descr">
              Movie Search App, utilizing ReactJS and OMDb API.<br></br>Type
              your query in the search box and click the icon to get your info
              about the movies you want.
            </p>
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
          <img
            className="sect2_product_img"
            src={note_shot}
            alt="Project 4"
          ></img>
          <div className="sect2_product_info">
            <h3 className="sect2_header_h3">Notes Project</h3>
            <div className="sect2_links_container">
              <a href="https://github.com/ondairos/notes_project">
                <img
                  className="sect2_github_icon"
                  src={github_icon}
                  alt="github"
                ></img>
              </a>{" "}
              <a href="">
                <img className="sect2_github_icon" src={live_icon} alt="live" />
              </a>
            </div>

            <p className="sect2_descr">
              Notes Project is a simple Markdown note-taking app built with
              React.
              <br /> It allows users to create, edit and save notes in Markdown
              format.
            </p>
            <p className="sect2_tags">
              <span className="s_tag">ReactJS</span>{" "}
              <span className="s_tag">React Split</span>
              <span className="s_tag">Showdown</span>
              <span className="s_tag">Javascript</span>
              <span className="s_tag">HTML</span>
              <span className="s_tag">CSS</span>
            </p>
          </div>
        </div>

        <div className="sect2_product">
          <img
            className="sect2_product_img"
            src={tenzies_shot}
            alt="Project 1"
          ></img>
          <div className="sect2_product_info">
            <h3 className="sect2_header_h3">Tenzies Dice Game</h3>
            <div className="sect2_links_container">
              <a href="https://github.com/ondairos/tenzies_game">
                <img
                  className="sect2_github_icon"
                  src={github_icon}
                  alt="github"
                ></img>
              </a>{" "}
              <a href="https://majestic-starship-884e43.netlify.app/">
                <img className="sect2_github_icon" src={live_icon} alt="live" />
              </a>
            </div>
            <p className="sect2_descr">
              A dice game that allows players to roll the dice and keep track of
              their scores.
            </p>
            <p className="sect2_tags">
              <span className="s_tag">ReactJS</span>{" "}
              <span className="s_tag">Javascript</span>
              <span className="s_tag">HTML</span>
              <span className="s_tag">CSS</span>
            </p>
          </div>
        </div>

        <div className="sect2_product">
          <img
            className="sect2_product_img"
            src={travel_shot}
            alt="Project 5"
          ></img>
          <div className="sect2_product_info">
            <h3 className="sect2_header_h3">Travel Journal</h3>
            <div className="sect2_links_container">
              <a href="https://github.com/ondairos/React_Travel_Guide">
                <img
                  className="sect2_github_icon"
                  src={github_icon}
                  alt="github"
                ></img>
              </a>{" "}
              <a href="https://celadon-clafoutis-93bebf.netlify.app/">
                <img className="sect2_github_icon" src={live_icon} alt="live" />
              </a>
            </div>
            <p className="sect2_descr">
              Travel Journal app created for displaying personal visits to
              international destinations.
            </p>
            <p className="sect2_tags">
              <span className="s_tag">ReactJS</span>{" "}
              <span className="s_tag">HTML</span>
              <span className="s_tag">CSS</span>
            </p>
          </div>
        </div>

        <div className="sect2_product">
          <img
            className="sect2_product_img"
            src={digital_card_shot}
            alt="Project 6"
          ></img>
          <h3 className="sect2_header_h3">Digital Card</h3>
          <div className="sect2_links_container">
            {" "}
            <a href="https://github.com/ondairos/digital_card">
              <img
                className="sect2_github_icon"
                src={github_icon}
                alt="github"
              ></img>
            </a>{" "}
            <a href="https://stirring-gecko-25862c.netlify.app/">
              <img className="sect2_github_icon" src={live_icon} alt="live" />
            </a>
          </div>
          <p className="sect2_descr">
            Digital Personal Card created ReactJS, HTML and CSS.
          </p>
          <p className="sect2_tags">
            <span className="s_tag">ReactJS</span>
            <span className="s_tag">HTML</span>
            <span className="s_tag">CSS</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
