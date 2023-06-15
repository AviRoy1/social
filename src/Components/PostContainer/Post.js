import React from "react";
import "./post.css";
import ProfileImage from "../images/Profile.png";
import LikeIcon from "../images/like.png";
import Commenticon from "../images/speech-bubble.png";

const Post = () => {
  return (
    <div className="PostContainer">
      <div className="SubPostContainer">
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={`${ProfileImage}`} className="PostImage" alt="" />
            <p style={{ marginLeft: "5px" }}>Avijit</p>
          </div>
          <p
            style={{
              textAlign: "start",
              width: "94%",
              marginLeft: 10,
              marginTop: 0,
            }}>
            wfwfm m fmwjforo 3ro3rdasmdnvjbfalmdd oqpqepqkd;qmfnwfnwnwf
            lldmqldmqdmcnjdoqjoqd ndqolqmlqmd lkqdqkdmq ljoqqy2uh ajal,aef edn
            ndqmdqldm qdqldjqldml pipqenqdnq ,qdqd...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
