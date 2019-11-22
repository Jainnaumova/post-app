import React from "react";
import Navbar from "./Navbar";
import PostList from "./PostList";
import PostInput from "./PostInput";

import "./app.scss";

function App() {
  return (
    <div className="app-wrapper">
      <div className="navbar-container">
        <Navbar />
      </div>
      <div>
        <PostInput />
      </div>
      <div className="posts-container">
        <PostList />
      </div>
    </div>
  );
}

export default App;
