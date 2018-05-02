import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import "./styles/index-styles.css";
/*import { Provider } from 'react-redux';
import { createStore } from 'redux';*/

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
