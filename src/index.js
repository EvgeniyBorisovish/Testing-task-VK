import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore} from "redux";
import App from "./components/app"
//import App from './App'
import reducers from "./reducers";
import "./index.css"
const rootElement = document.getElementById("root");

const store = createStore( reducers );


ReactDOM.render(
    <React.StrictMode >
        <Provider store = { store }>
        <App />
        </Provider> 
    </React.StrictMode>,
    rootElement
);
