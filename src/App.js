import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Feed from "./components/feed";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <nav
          className="navbar navbar-expand-md fixed-top"
          style={{ borderBottom: "1px black solid", background: "#fff" }}
        >
          <img src={"/images/logo.png"} width="40" height="40" alt="" />
          <span style={{ borderLeft: "1px black solid" }}>
            <a style={{ margin: "0px 10px" }} className="navbar-brand">
              Reactagram
            </a>
          </span>
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
