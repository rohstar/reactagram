import React, { Component } from "react";

class Sidebar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="media">
          <img
            src={
              "https://loremflickr.com/50/50?random=" +
              Math.floor(Math.random() * 10)
            }
            className="rounded-circle mr-3"
          />
          <div className="media-body">
            <h5 className="mt-0">{this.props.user.username}</h5>
            {this.props.user.name}
          </div>
        </div>
        <hr />
        <div>
          <small style={{ fontSize: "11px" }}>
            Support • Press • API • Jobs • Privacy • Terms • Directory •
            Profiles • Hashtags • Language{" "}
          </small>
        </div>
      </React.Fragment>
    );
  }
}

export default Sidebar;
