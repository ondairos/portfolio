import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="container">
      <div className="box nav">
        <nav id="navId" className="navMenu">
          <a href="#navId">Home</a>
          <a href="#sect1">Blog</a>
          <a href="#sect2">Projects</a>
          <a href="#sect3">About</a>
          <div className="dot"></div>
        </nav>
      </div>
      <div id="sect1" className="box section1">
        <blockquote className="section_blockq">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
          libero. Ea rerum fugiat laboriosam exercitationem vitae atque
          voluptates repudiandae ducimus facilis velit, cum saepe molestiae,
          voluptatem natus, magni necessitatibus sit!
        </blockquote>
        <div className="box section1_textSide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          maxime. Reiciendis in nulla aliquam, ea itaque illo harum assumenda
          doloribus, eum maiores recusandae fugit amet numquam dolor ad,
          excepturi cum?
        </div>
        <div className="box section1_textTestimonial">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          voluptate molestiae nulla dicta odit, possimus minima voluptatem
          tempore doloremque doloribus, asperiores ullam, dolores ex at facere
          itaque. Vitae, sequi esse.
        </div>
        <div className="box section1_textEpilogue">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nisi
          maxime sapiente fugit dolores quisquam voluptas accusantium, a
          similique soluta excepturi blanditiis. Hic voluptas adipisci cumque ea
          corporis cum fugiat.
        </div>
      </div>
      <div id="sect2" className="box section2">
        <h1>Projects:</h1>
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus nisi cupiditate delectus veniam sit similique
          perferendis. Nobis, at aspernatur aperiam corrupti delectus, odit
          quibusdam voluptate sapiente molestias sequi deserunt quos.
        </h4>
        <div className="sect2_container">
          <div className="sect2_product">
            <img
              src="https://via.placeholder.com/250x250"
              alt="Project 1"
            ></img>
            <h3>Project 1</h3>
            <p>$20.00</p>
          </div>
          <div className="sect2_product">
            <img
              src="https://via.placeholder.com/250x250"
              alt="Project 2"
            ></img>
            <h3>Project 2</h3>
            <p>$25.00</p>
          </div>
          <div className="sect2_product">
            <img
              src="https://via.placeholder.com/250x250"
              alt="Project 3"
            ></img>
            <h3>Project 3</h3>
            <p>$30.00</p>
          </div>
          <div className="sect2_product">
            <img
              src="https://via.placeholder.com/250x250"
              alt="Project 4"
            ></img>
            <h3>Project 4</h3>
            <p>$35.00</p>
          </div>
          <div className="sect2_product">
            <img
              src="https://via.placeholder.com/250x250"
              alt="Project 5"
            ></img>
            <h3>Project 5</h3>
            <p>$40.00</p>
          </div>
          <div className="sect2_product">
            <img
              src="https://via.placeholder.com/250x250"
              alt="Project 6"
            ></img>
            <h3>Project 6</h3>
            <p>$45.00</p>
          </div>
          <div className="sect2_product">
            <img
              src="https://via.placeholder.com/250x250"
              alt="Project 7"
            ></img>
            <h3>Project 7</h3>
            <p>$50.00</p>
          </div>
          <div className="sect2_product">
            <img
              src="https://via.placeholder.com/250x250"
              alt="Project 8"
            ></img>
            <h3>Project 8</h3>
            <p>$55.00</p>
          </div>
        </div>
      </div>
      <div id="sect3" className="box section3">
        section3
      </div>
      <div id="foot" className="box footer">
        <p className="footer_p">Ioannis Kantiloros - 2023.</p>
      </div>
    </div>
  );
}

export default App;
