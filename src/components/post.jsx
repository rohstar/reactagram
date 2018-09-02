import React, { Component } from "react";
import Comments from "./comments";

class Post extends Component {
  state = {
    likes: this.props.likes,
    likeImage: "/images/like.png"
  };

  componentDidMount() {}

  onLike = () => {
    this.state.likeImage === "/images/liked.png"
      ? this.setState({
          likes: this.state.likes - 1,
          likeImage: "/images/like.png"
        })
      : this.setState({
          likes: this.state.likes + 1,
          likeImage: "/images/liked.png"
        });
  };

  render() {
    return (
      <div className="card" style={{ margin: 10 }}>
        <h6 className="card-title" style={{ padding: 20 }}>
          <img
            src={
              "https://loremflickr.com/50/50?random=" +
              Math.floor(Math.random() * 10)
            }
            className="rounded-circle"
          />
          <span style={{ marginLeft: "10px" }}>{this.props.user.username}</span>
        </h6>

        <img
          onDoubleClick={this.onLike}
          className="card-img-top"
          src={this.props.img}
        />

        <div>
          <h6 className="card-subtitle mb-2 text-muted" style={{ margin: 5 }}>
            <a onClick={this.onLike}>
              <img src={this.state.likeImage} style={{ width: 30 }} />
            </a>
            {this.state.likes} likes
          </h6>
        </div>
        <h6 className="card-title" style={{ padding: 10 }}>
          <div className="inline-headers">
            <span className="d-inline">
              <bold>{this.props.user.username + " "}</bold>
            </span>
            <span className=" d-inline card-subtitle mb-2 text-muted">
              {this.props.caption}
            </span>
          </div>
          <Comments />
        </h6>
        {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
      </div>
    );
  }
}

export default Post;
