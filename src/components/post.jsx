import React, { Component } from "react";

class Post extends Component {
  state = {};
  render() {
    return (
      <div className="card" style={{ margin: 10 }}>
        <img
          className="card-img-top"
          src={this.props.img}
          alt="Card image cap"
        />
        <h6 className="card-subtitle mb-2 text-muted" style={{ margin: 5 }}>
          {this.props.likes} likes
        </h6>
        <h5 className="card-title" style={{ padding: 10 }}>
          {this.props.caption}
        </h5>
        {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
      </div>
    );
  }
}

export default Post;
