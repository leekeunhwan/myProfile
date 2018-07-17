import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import registerServiceWorker from "./registerServiceWorker.js";
import "assets/scss/material-kit-react.css?v=1.1.0";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
