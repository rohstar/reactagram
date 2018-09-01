import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Feed from "./components/feed";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-md fixed-top">
          <a className="navbar-brand" href="#">
            Reactagram
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarsExampleDefault"
          />
        </nav>

        <main role="main" className="container" style={{ marginTop: 100 }}>
          <Feed />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
