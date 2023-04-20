import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="container">
      <NavBar />
      <About />
      <Projects />
      <TechStack />
      <Footer />
    </div>
  );
}

export default App;
