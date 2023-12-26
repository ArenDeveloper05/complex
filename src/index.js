import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./i18n";
import store from "./redux/store";

import "./index.scss";
import "./styles/media.css";
import { ParallaxProvider } from "react-scroll-parallax";

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
