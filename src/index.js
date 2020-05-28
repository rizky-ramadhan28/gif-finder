import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { GifProvider } from "./context/index";

import App from "./App";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GifProvider>
        <App />
      </GifProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
