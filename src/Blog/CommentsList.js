import React, { Component } from "react";
import Comment from "./Comment";
import { connect } from "react-redux";

class CommentsList extends Component {
  constructor(props) {
    super(props);
  }

  getContent() {
    const { comments, postId } = this.props;
    this.comments = comments.filter(comment => comment.postId === postId);

    return this.comments.map(comment => {
      return (
        <div key={comment.id}>
          <Comment comment={comment} />
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <ul>{this.getContent()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: state.posts.comments
  };
};

export default connect(
  mapStateToProps,
  null
)(CommentsList);
