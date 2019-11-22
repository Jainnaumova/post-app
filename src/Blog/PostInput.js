import React, { Component } from "react";
import { connect } from "react-redux";

import { addPost } from "../redux/modules/posts";

class PostInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postMessage: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      postMessage: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { addPost } = this.props;
    const { postMessage } = this.state;
    addPost({ post: postMessage });
    this.setState({ postMessage: "" });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <textarea
            type="text"
            value={this.state.postMessage}
            onChange={this.handleChange}
          />
          <button type="submit" className="button">
            Add new post
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addPost
};

export default connect(
  null,
  mapDispatchToProps
)(PostInput);
