import "../App.css";
// import tech stack icons
import ReactIcon from "../assets/tsicons/react-js-icon.svg";
import HtmlIcon from "../assets/tsicons/html-icon.svg";
import CSSIcon from "../assets/tsicons/css-icon.svg";
import JSIcon from "../assets/tsicons/javascript-programming-language-icon.svg";
import TSIcon from "../assets/tsicons/typescript-programming-language-icon.svg";
import VueIcon from "../assets/tsicons/vue-icon.svg";

import NodeIcon from "../assets/tsicons/node-js-icon.svg";
import MongoIcon from "../assets/tsicons/mongodb-icon.svg";
import ExpressIcon from "../assets/tsicons/express-js-icon.svg";
import MySQLIcon from "../assets/tsicons/mysql-icon.svg";
import PythonIcon from "../assets/tsicons/python-programming-language-icon.svg";

import gitIcon from "../assets/tsicons/git-icon.svg";
import dockerIcon from "../assets/tsicons/docker-icon.svg";

const TechStack = () => {
  return (
    <div id="sect3" className="box section3">
      <h1>Technologies</h1>
      <div className="section3_container">
        <div className="section3_col1">
          <div className="section3_frontend">
            <div className="section3_col1_header">
              <h3>Frontend</h3>
            </div>
            <div className="section3_col1_frontend_icontainer">
              <div className="section3_col1_fr_ip">
                <div className="image">
                  <img src={HtmlIcon} alt="HtmlIcon" />
                </div>
                <p>HTML</p>
              </div>
              <div className="section3_col1_fr_ip">
                <div className="image">
                  <img src={CSSIcon} alt="CSSIcon" />
                </div>
                <p>CSS</p>
              </div>
              <div className="section3_col1_fr_ip">
                <div className="image">
                  <img src={JSIcon} alt="JSIcon" />
                </div>
                <p>JavaScript</p>
              </div>
              <div className="section3_col1_fr_ip">
                <div className="image">
                  <img src={ReactIcon} alt="ReactIcon" />
                </div>
                <p>ReactJS</p>
              </div>
              <div className="section3_col1_fr_ip">
                <div className="image">
                  <img src={VueIcon} alt="TSIcon" />
                </div>
                <p>VueJS</p>
              </div>
            </div>
          </div>
        </div>
        {/* =======BACKEND========= */}
        <div className="section3_col1">
          <div className="section3_frontend">
            <div className="section3_col1_header">
              <h3>Backend</h3>
            </div>
            <div className="section3_col1_frontend_icontainer">
              <div className="section3_col1_fr_ip">
                <div className="image">
                  <img src={NodeIcon} alt="NodeIcon" />
                </div>
                <p>NodeJS</p>
              </div>
              <div className="section3_col1_fr_ip">
                <div className="image">
                  <img src={ExpressIcon} alt="ExpressIcon" />
                </div>
                <p>ExpressJS</p>
              </div>
              <div className="section3_col1_fr_ip">
                <div className="image">
                  <img src={MongoIcon} alt="MongoIcon" />
                </div>
                <p>MongoDB</p>
              </div>
              <div className="section3_col1_fr_ip">
                <div className="image">
                  <img src={MySQLIcon} alt="MySQLIcon" />
                </div>
                <p>MySQL</p>
              </div>
              <div className="section3_col1_fr_ip">
                <div className="image">
                  <img src={PythonIcon} alt="PythonIcon" />
                </div>
                <p>Python</p>
              </div>
            </div>
          </div>
        </div>
        {/* =======OTHER========= */}
        <div className="section3_col1">
          <div className="section3_frontend s3other">
            <div className="section3_col1_header">
              <h3>Other</h3>
            </div>
            <div className="section3_col1_frontend_icontainer">
              <div className="section3_col1_fr_ip">
                <div className="image">
                  <img src={gitIcon} alt="gitIcon" />
                </div>
                <p>Git</p>
              </div>
              <div className="section3_col1_fr_ip">
                <div className="image">
                  <img src={dockerIcon} alt="dockerIcon" />
                </div>
                <p>Docker</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
