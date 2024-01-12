import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ReactGA from "react-ga4";

const ANALYTICS_ID = import.meta.env.VITE_GA_ID;
ReactGA.initialize(ANALYTICS_ID);
ReactGA.send({
  hitType: "pageview",
  page: "/",
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
