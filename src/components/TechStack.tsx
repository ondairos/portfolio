import "../App.css";

import {
  frontEndTechstackData,
  backendTechstackData,
  otherTechstackData,
} from "../data/techstack";

type techStackData = {
  name: string;
  image: string;
};

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
              {frontEndTechstackData.map((element: techStackData) => {
                return (
                  <div className="section3_col1_fr_ip">
                    <div className="image">
                      <img src={element.image} alt={element.name} />
                    </div>
                    <p>{element.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="section3_col1">
          <div className="section3_frontend">
            <div className="section3_col1_header">
              <h3>Backend</h3>
            </div>
            <div className="section3_col1_frontend_icontainer">
              {backendTechstackData.map((element: techStackData) => {
                return (
                  <div className="section3_col1_fr_ip">
                    <div className="image">
                      <img src={element.image} alt={element.name} />
                    </div>
                    <p>{element.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="section3_col1">
          <div className="section3_frontend s3other">
            <div className="section3_col1_header">
              <h3>Other</h3>
            </div>
            <div className="section3_col1_frontend_icontainer">
              {otherTechstackData.map((element: techStackData) => {
                return (
                  <div className="section3_col1_fr_ip">
                    <div className="image">
                      <img src={element.image} alt={element.name} />
                    </div>
                    <p>{element.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
