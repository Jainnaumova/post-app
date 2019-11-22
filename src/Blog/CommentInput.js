import React, { Component } from "react";
import { connect } from "react-redux";

import { addComment } from "../redux/modules/posts";

class CommentInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentMessage: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      commentMessage: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { addComment, postId } = this.props;
    const { commentMessage } = this.state;
    addComment({ comment: commentMessage, postId });
    this.setState({ commentMessage: "" });
  }

  render() {
    return (
      <div className="comment-input-container">
        <form onSubmit={this.handleSubmit}>
          <textarea
            type="text"
            value={this.state.postMessage}
            onChange={this.handleChange}
          />
          <button type="submit" className="button">
            add comment
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addComment
};

export default connect(
  null,
  mapDispatchToProps
)(CommentInput);
