import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/globals.css";
import "./styles/hero-circuit-fix.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/SolucionesTecnologicas">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
