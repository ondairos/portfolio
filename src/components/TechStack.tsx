import "../App.css";
// import tech stack icons
import ReactIcon from "../assets/tsicons/react-js-icon.svg";
import NodeIcon from "../assets/tsicons/node-js-icon.svg";
import MongoIcon from "../assets/tsicons/mongodb-icon.svg";
import ExpressIcon from "../assets/tsicons/express-js-icon.svg";

const TechStack = () => {
  return (
    <div id="sect3" className="box section3">
      <h1>Technologies:</h1>
      <div className="section3_container">
        <div className="section3_col1">
          <div className="section3_frontend">
            <div className="section3_col1_header">
              <h3>Frontend:</h3>
            </div>
            <div className="section3_col1_frontend_icontainer">
              <div className="section3_col1_fr_ip">
                <div className="image">
                  <img src={ReactIcon} alt="ReactIcon" />
                </div>
                <p>React JS</p>
              </div>
              <div className="section3_col1_fr_ip">
                <div className="image">
                  <img src={NodeIcon} alt="NodeIcon" />
                </div>
                <p>NodeJS</p>
              </div>
              <div className="section3_col1_fr_ip">
                <div className="image">
                  <img src={MongoIcon} alt="MongoIcon" />
                </div>
                <p>MongoDB</p>
              </div>
              <div className="section3_col1_fr_ip">
                <div className="image">
                  <img src={ExpressIcon} alt="ExpressIcon" />
                </div>
                <p>ExpressJS</p>
              </div>
            </div>
          </div>
        </div>
        <div className="section3_col1">
          <div className="section3_frontend">
            <div className="section3_col1_header">
              <h3>Frontend:</h3>
            </div>
            <div className="section3_col1_frontend_icontainer">
              <div className="section3_col1_fr_ip">
                <div className="image">
                  <img src={ReactIcon} alt="ReactIcon" />
                </div>
                <p>React JS</p>
              </div>
              <div className="section3_col1_fr_ip">
                <div className="image">
                  <img src={NodeIcon} alt="NodeIcon" />
                </div>
                <p>NodeJS</p>
              </div>
              <div className="section3_col1_fr_ip">
                <div className="image">
                  <img src={MongoIcon} alt="MongoIcon" />
                </div>
                <p>MongoDB</p>
              </div>
              <div className="section3_col1_fr_ip">
                <div className="image">
                  <img src={ExpressIcon} alt="ExpressIcon" />
                </div>
                <p>ExpressJS</p>
              </div>
            </div>
          </div>
        </div>
        <div className="section3_col1">
          <div className="section3_frontend">
            <div className="section3_col1_header">
              <h3>Frontend:</h3>
            </div>
            <div className="section3_col1_frontend_icontainer">
              <div className="section3_col1_fr_ip">
                <div className="image">
                  <img src={ReactIcon} alt="ReactIcon" />
                </div>
                <p>React JS</p>
              </div>
              <div className="section3_col1_fr_ip">
                <div className="image">
                  <img src={NodeIcon} alt="NodeIcon" />
                </div>
                <p>NodeJS</p>
              </div>
              <div className="section3_col1_fr_ip">
                <div className="image">
                  <img src={MongoIcon} alt="MongoIcon" />
                </div>
                <p>MongoDB</p>
              </div>
              <div className="section3_col1_fr_ip">
                <div className="image">
                  <img src={ExpressIcon} alt="ExpressIcon" />
                </div>
                <p>ExpressJS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
