import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Feed from "./components/feed";
import Nav from "./components/nav";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <main role="main" className="container" style={{ marginTop: 50 }}>
          <Feed />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
