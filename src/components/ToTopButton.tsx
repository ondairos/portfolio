import React from "react";
import { useEffect, useState } from "react";
import "../App.css";

const ToTopButton = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  //scroll up
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {backToTop && (
        <button onClick={scrollUp} className="to_top_button">
          ^
        </button>
      )}
    </>
  );
};

export default ToTopButton;
