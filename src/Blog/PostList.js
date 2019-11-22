import React, { Component } from "react";
import Post from "./Post";
import { connect } from "react-redux";

class PostList extends Component {
  constructor(props) {
    super(props);
  }

  getContent() {
    const { posts } = this.props;

    return posts.map(post => {
      return (
        <div className="post-item" key={post.id}>
          <Post post={post} />
        </div>
      );
    });
  }

  render() {
    const { posts } = this.props;
    return (
      <div>
        <ul>{posts.length ? this.getContent() : "No posts yet"}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.posts
  };
};

export default connect(
  mapStateToProps,
  null
)(PostList);
