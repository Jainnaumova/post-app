import React, { Component } from "react";
import CommentsList from "./CommentsList";
import CommentInput from "./CommentInput";

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayComments: false
    };

    this.toggleComments = this.toggleComments.bind(this);
  }

  toggleComments() {
    this.setState(prevState => ({
      displayComments: !prevState.displayComments
    }));
  }

  render() {
    const { post } = this.props;
    const { displayComments } = this.state;
    return (
      <div>
        <div>{post.post}</div>
        <button onClick={this.toggleComments}>
          {this.state.displayComments ? "Hide Comments" : "Show Comments"}
        </button>
        <button>Like</button>
        {displayComments && <CommentsList postId={post.id} />}
        {displayComments && <CommentInput postId={post.id} />}
      </div>
    );
  }
}

export default Post;
