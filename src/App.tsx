import "./App.css";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ToTopButton from "./components/ToTopButton";
// import { useEffect } from "react";

function App() {
  return (
    <div id="container">
      <NavBar />
      <About />
      <Projects />
      <TechStack />
      <Contact />
      <ToTopButton />
      <Footer />
    </div>
  );
}

export default App;
