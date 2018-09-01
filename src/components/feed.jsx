import React, { Component } from "react";
import Post from "./post";
import axios from "axios";

//here, loading in the state prevents
//a render before the async call
//was completed

class Feed extends Component {
  state = {
    posts: [],
    users: [],
    loading: true
  };

  constructor(props) {
    super();
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
      const posts = res.data;
      this.setState({ posts });
    });
    console.log("api res sent");
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        console.log("api res back");
        const users = res.data;
        this.setState({ users });
      })
      .then(() => {
        this.setState({
          loading: false
        });
      });
  }

  render() {
    if (this.state.loading) {
      return null;
    }

    const posts = this.state.posts.map(post => (
      <Post
        user={
          this.state.users[Math.floor(Math.random() * this.state.users.length)]
        }
        key={post.id}
        caption={post.title}
        likes={Math.floor(Math.random() * 100)}
        img={
          "https://picsum.photos/400/400?image=" +
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
