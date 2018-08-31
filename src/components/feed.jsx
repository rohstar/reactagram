import React, { Component } from "react";
import Post from "./post";
import axios from "axios";

class Feed extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
      const posts = res.data;
      this.setState({ posts });
    });
  }

  render() {
    const posts = this.state.posts.map(post => (
      <Post
        caption={post.title}
        likes={Math.floor(Math.random() * 100)}
        img={
          "https://picsum.photos/500/500?image=" +
          Math.floor(Math.random() * 100)
        }
      />
    ));

    return (
      <div className="container">
        <div className="row">
          <div className="col" />
          <div className="col-10">{posts}</div>
          <div className="col" />
        </div>
      </div>
    );
  }
}

export default Feed;
