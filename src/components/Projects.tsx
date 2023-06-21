import React from "react";
import "../App.css";
import github_icon from "../assets/tsicons/github-icon.svg";
import live_icon from "../assets/tsicons/website-layout-icon.svg";
import hs_shot from "../assets/hs_screen.jpg";
import flick_shot from "../assets/flick_screen.jpg";
import blog_shot from "../assets/blog_image.jpg";
import wikipocket_shot from "../assets/wikipocket.png";
import ecommerce_shot from "../assets/ecom_image.jpg";
import insta_clone_shot from "../assets/instaclone.jpg";

const Projects = () => {
  return (
    <div id="sect2" className="box section2">
      <h1 className="section2_header">Projects</h1>
      <div className="sect2_container">
        <div className="sect2_product">
          <a href="https://luxury-taffy-98aa2d.netlify.app/">
            <img
              className="sect2_product_img"
              src={hs_shot}
              alt="Project 2"
            ></img>
          </a>
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
          <a href="https://blog-ondairos.vercel.app/">
            <img
              className="sect2_product_img"
              src={blog_shot}
              alt="Project 3"
            ></img>
          </a>

          <div className="sect2_product_info">
            <h3 className="sect2_header_h3">Personal Blog</h3>
            <div className="sect2_links_container">
              {" "}
              <a href="https://github.com/ondairos/blog">
                <img
                  className="sect2_github_icon"
                  src={github_icon}
                  alt="github"
                ></img>
              </a>{" "}
              <a href="https://blog-ondairos.vercel.app/">
                <img className="sect2_github_icon" src={live_icon} alt="live" />
              </a>
            </div>
            <p className="sect2_descr">
              Personal static generated Blog created with NextJS and deployed on
              Vercel.<br></br>
              <br></br> Adding blog posts through .md files, parsing them with
              gray-matter and remark and displaying them to the user.
            </p>
            <p className="sect2_tags">
              <span className="s_tag">NextJS</span>
              <span className="s_tag">Typescript</span>
              <span className="s_tag">TailwindCSS</span>
              <span className="s_tag">Gray Matter</span>
              <span className="s_tag">Remark</span>
            </p>
          </div>
        </div>

        <div className="sect2_product">
          <a href="https://react-movie-deploy.vercel.app/">
            <img
              className="sect2_product_img"
              src={flick_shot}
              alt="Project 4"
            ></img>
          </a>
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
              Movie Search App, utilizing ReactJS and OMDb API.<br></br>
              <br></br>Type your query in the search box and click the icon to
              get your info about the movies you want.
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
          <a href="https://wiki-pocket.vercel.app/">
            <img
              className="sect2_product_img"
              src={wikipocket_shot}
              alt="Project 5"
            ></img>
          </a>
          <div className="sect2_product_info">
            <h3 className="sect2_header_h3">WikiPocket</h3>
            <div className="sect2_links_container">
              <a href="https://wiki-pocket.vercel.app/">
                <img
                  className="sect2_github_icon"
                  src={github_icon}
                  alt="github"
                ></img>
              </a>{" "}
              <a href="https://wiki-pocket.vercel.app/">
                <img className="sect2_github_icon" src={live_icon} alt="live" />
              </a>
            </div>

            <p className="sect2_descr">
              WikiPocket is a wikipedia search page that provides the user
              wikipedia based on provided query.
              <br /> It allows users to view a small summary and thumbnail of
              the searched keyword.
            </p>
            <p className="sect2_tags">
              <span className="s_tag">NextJS</span>{" "}
              <span className="s_tag">Javascript</span>
              <span className="s_tag">Wikipedia API</span>
              <span className="s_tag">HTML</span>
              <span className="s_tag">CSS</span>
            </p>
          </div>
        </div>

        <div className="sect2_product">
          <a href="https://instagram-clone-ondairos.vercel.app/">
            <img
              className="sect2_product_img"
              src={insta_clone_shot}
              alt="Project 6"
            ></img>
          </a>
          <div className="sect2_product_info">
            <h3 className="sect2_header_h3">Instagram Clone</h3>
            <div className="sect2_links_container">
              <a href="https://github.com/ondairos/instagram_clone">
                <img
                  className="sect2_github_icon"
                  src={github_icon}
                  alt="github"
                ></img>
              </a>{" "}
              <a href="https://instagram-clone-ondairos.vercel.app/">
                <img className="sect2_github_icon" src={live_icon} alt="live" />
              </a>
            </div>
            <p className="sect2_descr">
              This is a project that aims to replicate features of Instagram
              using modern web technologies.The project includes frontend
              components and Firebase integration for authentication and data
              storage.
            </p>
            <p className="sect2_tags">
              <span className="s_tag">NextJS</span>{" "}
              <span className="s_tag">TailwindCSS</span>
              <span className="s_tag">Firebase</span>
              <span className="s_tag">Recoil</span>
              <span className="s_tag">TypeScript</span>
              <span className="s_tag">Next-Auth</span>
            </p>
          </div>
        </div>

        <div className="sect2_product">
          <a href="https://ecommerce-app-taupe-six.vercel.app/">
            <img
              className="sect2_product_img"
              src={ecommerce_shot}
              alt="Project 7"
            ></img>
          </a>
          <div className="sect2_product_info">
            <h3 className="sect2_header_h3">e-Commerce Page</h3>
            <div className="sect2_links_container">
              <a href="https://github.com/ondairos/ecommerce-app">
                <img
                  className="sect2_github_icon"
                  src={github_icon}
                  alt="github"
                ></img>
              </a>{" "}
              <a href="https://ecommerce-app-taupe-six.vercel.app/">
                <img className="sect2_github_icon" src={live_icon} alt="live" />
              </a>
            </div>
            <p className="sect2_descr">
              e-Commerce webpage that displays <br></br>Deals of the Day, Modal
              View, Rating and Details of products provided by a store API.
              <br></br> This is a FrontEnd project made with NextJS.
            </p>
            <p className="sect2_tags">
              <span className="s_tag">NextJS</span>{" "}
              <span className="s_tag">HeadlessUI</span>
              <span className="s_tag">Hero Icons</span>
              <span className="s_tag">HTML</span>
              <span className="s_tag">Tailwind CSS</span>
              <span className="s_tag">Typescript</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
