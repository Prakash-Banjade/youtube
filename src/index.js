import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import GetVideos from "./GetVideos";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GetVideos>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </GetVideos>
  </BrowserRouter>
);
