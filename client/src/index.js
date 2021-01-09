import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./theme/theme.style.scss";
import "./media-queries/1366px.style.scss";
import "./media-queries/900px.style.scss";
import "./media-queries/768px.style.scss";
import "./media-queries/440px.style.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
