import React, { Component } from "react";

class Comment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { comment } = this.props;
    return <div>{comment.comment}</div>;
  }
}

export default Comment;
