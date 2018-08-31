import React, { Component } from "react";
import Post from "./post";

class Feed extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col" />
          <div className="col-10">
            <Post />
          </div>
          <div className="col" />
        </div>
      </div>
    );
  }
}

export default Feed;
