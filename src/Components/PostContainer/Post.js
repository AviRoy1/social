import React, { useState } from "react";
import "./post.css";
import ProfileImage from "../images/Profile.png";
import LikeIcon from "../images/like.png";
import Commenticon from "../images/speech-bubble.png";
import ShareIcon from "../images/share.png";
import MoreOptions from "../images/more.png";
import anotherlikeicon from "../images/setLike.png";

const Post = () => {
  const [like, setLike] = useState(LikeIcon);
  const [count, setCount] = useState(10);

  const handleLike = () => {
    if (like === LikeIcon) {
      setLike(anotherlikeicon);
      setCount(count + 1);
    } else {
      setLike(LikeIcon);
      setCount(count - 1);
    }
  };

  return (
    <div className="PostContainer">
      <div className="SubPostContainer">
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={`${ProfileImage}`} className="PostImage" alt="" />
            <div>
              <p style={{ marginLeft: "5px", textAlign: "start" }}>Avijit</p>
              <p
                style={{
                  fontSize: "12px",
                  textAlign: "start",
                  marginLeft: 10,
                  marginTop: -13,
                  color: "#aaa",
                }}>
                Following by Avijit
              </p>
            </div>
            <img src={`${MoreOptions}`} className="MoreIcons" alt="" />
          </div>
          <p
            style={{
              textAlign: "start",
              width: "94%",
              marginLeft: 16,
              marginTop: 4,
            }}>
            wfwfm m fmwjforo 3ro3rdasmdnvjbfalmdd oqpqepqkd;qmfnwfnwnwf
            lldmqldmqdmcnjdoqjoqd ndqolqmlqmd .....
          </p>
          <img src={`${ProfileImage}`} className="PostImages" alt="" />
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", marginLeft: "10px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}>
                <img
                  src={`${like}`}
                  className="IconsforPost"
                  onClick={handleLike}
                  alt=""
                />
                <p style={{ marginLeft: "6px" }}>{count} Likes</p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: 20,
                  cursor: "pointer",
                }}>
                <img src={`${Commenticon}`} className="IconsforPost" alt="" />
                <p style={{ marginLeft: "6px" }}>10K Comments</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: 100,
                cursor: "pointer",
              }}>
              <img src={`${ShareIcon}`} className="IconsforPost" alt="" />
              <p style={{ marginLeft: "6px" }}>Share</p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={`${ProfileImage}`} className="PostImage" alt="" />
            <input
              type="text"
              className="commentinput"
              placeholder="Write you thought"
            />
            <button className="addCommentBtn">Add Comment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
