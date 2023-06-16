import React from "react";
import "./mainpost.css";
import Contentpost from "../ContentPostContainer/Contentpost";
import Post from "../PostContainer/Post";

const Mainpost = () => {
  return (
    <div className="mainpostContainer">
      <Contentpost />
      <Post />
      <Post />
    </div>
  );
};

export default Mainpost;
