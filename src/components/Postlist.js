import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
class Postlist extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList = () => {
    return this.props.post.map(post => {
      return (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      );
    });
  };
  render() {
    console.log(this.props.post);
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { post: state.post };
};

const mapDispatchToProps = {
  fetchPosts: fetchPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(Postlist);
