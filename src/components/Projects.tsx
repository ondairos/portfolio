import "../App.css";
import github_icon from "../assets/tsicons/github-icon.svg";
import live_icon from "../assets/tsicons/website-layout-icon.svg";

import { projectData } from "../data/projects";

type projectDataTypes = {
  name: string;
  link: string;
  gh_link: string;
  image: string;
  description: string;
  tags: string[];
};

const Projects = () => {
  return (
    <div id="sect2" className="box section2">
      <h1 className="section2_header">Projects</h1>
      <div className="sect2_container">
        {projectData.map((element: projectDataTypes) => {
          return (
            <div className="sect2_product" key={element.name}>
              <a href={element.link}>
                <img
                  className="sect2_product_img"
                  src={element.image}
                  alt="Project 2"
                ></img>
              </a>
              <div className="sect2_product_info">
                <h3 className="sect2_header_h3">{element.name}</h3>
                <div className="sect2_links_container">
                  <a href={element.gh_link}>
                    <img
                      className="sect2_github_icon"
                      src={github_icon}
                      alt="github"
                    ></img>
                  </a>

                  <a href={element.link}>
                    <img
                      className="sect2_github_icon"
                      src={live_icon}
                      alt="live"
                    />
                  </a>
                </div>
                <p className="sect2_descr">{element.description}</p>
                <p className="sect2_tags">
                  {element.tags.map((element, index) => {
                    return (
                      <span className="s_tag" key={index}>
                        {element}
                      </span>
                    );
                  })}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
