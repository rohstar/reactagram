import React, { Component } from "react";
import axios from "../../node_modules/axios";

class Comments extends Component {
  state = {
    comments: [
      {
        username: "ravi.shankar",
        comment: "Wow!"
      },
      {
        username: "chris2002",
        comment: "Where was this?"
      },
      {
        username: "tina443",
        comment: "Such a beautiful picture"
      },
      {
        username: "bob1976",
        comment: "@lisa233 check this one out"
      },
      {
        username: "chin1312",
        comment: "double like!"
      },
      {
        username: "lisa.photography",
        comment: "this looks so relaxing"
      },
      {
        username: "chris123",
        comment: "omg! I can relate"
      }
    ]
  };

  constructor(props) {
    super();
  }

  getRandomComments() {
    let n = Math.floor(Math.random() * 4);
    var result = new Array(n),
      len = this.state.comments.length,
      taken = new Array(len);
    if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = this.state.comments[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }

  getContent() {
    return this.getRandomComments().map(comment => (
      <div className="inline-headers">
        <span className="d-inline">
          <bold>{comment.username + " "}</bold>
        </span>
        <span className=" d-inline card-subtitle mb-2 text-muted">
          {comment.comment}
        </span>
      </div>
    ));
  }

  render() {
    return this.getContent();
  }
}

export default Comments;
