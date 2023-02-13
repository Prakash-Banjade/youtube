import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import APIParams from "./APIParams";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <APIParams>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </APIParams>
  </BrowserRouter>
);
