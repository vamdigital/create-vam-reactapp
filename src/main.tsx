import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import App from "./App";
import "./index.css";
import { store } from "./store/store";

const GlobalStyles = createGlobalStyle`
	html {
		overflow-y: scroll;
		box-sizing: border-box;
	}

	*, *:before, *:after{
		box-sizing: inherit;
	}
	html, body {
		overflow: hidden;
		height: 100%;
	}
	body {
		margin: 0;
		padding: 0;
		font-size: 16px;
		line-height: 1.5;
	}

	ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	button {
		font-size: 12px;
	}



`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
