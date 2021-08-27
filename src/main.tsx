import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import App from "./App";
import "./index.css";

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



`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
