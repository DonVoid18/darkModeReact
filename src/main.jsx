import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ThemeState from "./context/ThemeState";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeState>
    <App />
  </ThemeState>
);
