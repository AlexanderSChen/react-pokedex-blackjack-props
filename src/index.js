import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById("root"));

// Allows app to work offline and load faster, can change unregister() to register().
serviceWorker.unregister();