import React from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import { Header } from "./components/Header";
import { CounterPage } from "./pages/Counter";
import { HomePage } from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/counter">
          <CounterPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
