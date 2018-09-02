import React, { Component } from "react";

class Nav extends Component {
  state = {};
  render() {
    return (
      <nav
        className="navbar sticky-top justify-content-center"
        style={{
          borderBottom: "1px rgba(0,0,0,.0975) solid",
          background: "#fff"
        }}
      >
        <div className="mr-auto m-2">
          <img src={"/images/logo.png"} width="50" height="50" alt="" />
          {/* <span style={{ borderLeft: "1px black solid" }}> */}
          <a style={{ margin: "0px 0px" }} className="navbar-brand">
            Reactagram
          </a>
        </div>
        {/* </span> */}
        <form class="form-inline mx-auto" style={{ textAlign: "right" }}>
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            style={{ width: "150%" }}
          />
        </form>
        <div className="ml-auto m-2">
          <a href="#">
            <img
              src={"/images/compass.png"}
              width="30"
              height="30"
              alt=""
              className="ml-3 mr-3"
            />
          </a>
          <a href="#">
            <img
              src={"/images/hearts.png"}
              width="40"
              height="40"
              alt=""
              className="ml-3 mr-3"
            />
          </a>
          <a href="#">
            <img
              src={"/images/person.png"}
              width="30"
              height="30"
              alt=""
              className="ml-3 mr-3"
            />
          </a>
        </div>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault" />
      </nav>
    );
  }
}

export default Nav;
