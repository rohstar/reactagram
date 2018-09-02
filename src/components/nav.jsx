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
        <img src={"/images/logo.png"} width="40" height="40" alt="" />
        {/* <span style={{ borderLeft: "1px black solid" }}> */}
        <a style={{ margin: "0px 0px" }} className="navbar-brand">
          Reactagram
        </a>
        {/* </span> */}
        <form
          class="form-inline my-2 my-lg-0 p-2"
          style={{ textAlign: "right" }}
        >
          {/* <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          /> */}
        </form>
        <div className="collapse navbar-collapse" id="navbarsExampleDefault" />
      </nav>
    );
  }
}

export default Nav;
