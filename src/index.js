import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ParallaxProvider } from "react-scroll-parallax";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./redux/store";

import "./i18n";

import "./index.scss";
import "./styles/media.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ParallaxProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ParallaxProvider>
);
