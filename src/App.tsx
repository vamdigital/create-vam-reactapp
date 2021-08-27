import React from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import { Header } from "./components/Header";
import { CounterContextProvider } from "./context/CounterContext";
import { CounterPage } from "./pages/Counter";
import { HomePage } from "./pages/Home";
import { Users } from "./pages/Users";

function App() {
  return (
    <div className="App">
      <CounterContextProvider>
        <Header />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/counter">
            <CounterPage />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
        </Switch>
      </CounterContextProvider>
    </div>
  );
}

export default App;
