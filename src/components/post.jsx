import React, { Component } from "react";

class Post extends Component {
  state = {
    likes: this.props.likes,
    likeImage: "/images/like.png"
  };

  componentDidMount() {}

  onLike = () => {
    this.setState({
      likes: this.state.likes + 1,
      likeImage: "/images/liked.png"
    });
  };

  render() {
    return (
      <div className="card" style={{ margin: 10 }}>
        <h5 className="card-title" style={{ padding: 10 }}>
          {this.props.user.username}
        </h5>
        <img
          onDoubleClick={this.onLike}
          className="card-img-top"
          src={this.props.img}
          alt="Card image cap"
        />
        <h6 className="card-subtitle mb-2 text-muted" style={{ margin: 5 }}>
          <a onClick={this.onLike}>
            <img src={this.state.likeImage} style={{ width: 30 }} />
          </a>
          {this.state.likes} likes
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
