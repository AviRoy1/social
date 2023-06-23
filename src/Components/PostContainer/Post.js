import React, { useEffect, useState } from "react";
import "./post.css";
import ProfileImage from "../images/Profile.png";
import LikeIcon from "../images/like.png";
import Commenticon from "../images/speech-bubble.png";
import ShareIcon from "../images/share.png";
import MoreOptions from "../images/more.png";
import anotherlikeicon from "../images/setLike.png";
import axios from "axios";
import { useSelector } from "react-redux";

const Post = ({ post }) => {
  const userDetails = useSelector((state) => state.user);
  const users = userDetails?.user;
  const userId = users.other._id;
  const accessToken = users.accessToken;
  const [like, setLike] = useState([
    post.like.includes(userId) ? anotherlikeicon : LikeIcon,
  ]);
  const [count, setCount] = useState(post.like.length);
  const [Comments, setComments] = useState(post.comments);
  const [commentwriting, setCommentwriting] = useState("");
  const [show, setShow] = useState(false);

  const [user, setUser] = useState([]);
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/user/post/user/details/${post.user}`
        );
        setUser(res.data);
      } catch (error) {
        console.log("Some error occured");
      }
    };
    getUser();
  }, []);

  console.log(Comments);

  const handleLike = async () => {
    if (like == LikeIcon) {
      await fetch(`http://localhost:5000/api/post/${post._id}/like`, {
        method: "PUT",
        headers: { "Content-type": "application/json", token: accessToken },
      });
      setLike(anotherlikeicon);
      setCount(count + 1);
    } else {
      await fetch(`http://localhost:5000/api/post/${post._id}/like`, {
        method: "PUT",
        headers: { "Content-type": "application/json", token: accessToken },
      });
      setLike(LikeIcon);
      setCount(count - 1);
    }
  };

  const addComment = async () => {
    const comment = {
      postid: `${post._id}`,
      username: `${users.other.username}`,
      comment: `${commentwriting}`,
      profile: `${users.other?.profile}`,
    };
    await fetch(`http://localhost:5000/api/post/comment/post`, {
      method: "PUT",
      headers: { "Content-Type": "application/Json", token: accessToken },
      body: JSON.stringify(comment),
    });
    setComments(Comments.concat(comment));
  };

  const handleComment = () => {
    addComment();
  };

  const handleshow = () => {
    if (show === false) {
      setShow(true);
    } else setShow(false);
  };

  return (
    <div className="PostContainer">
      <div className="SubPostContainer">
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            {user !== undefined ? (
              <img src={`${user.profile}`} className="PostImage" alt="" />
            ) : (
              <img src={`${ProfileImage}`} className="PostImage" alt="" />
            )}

            <div>
              <p style={{ marginLeft: "5px", textAlign: "start" }}>
                {user !== undefined ? user.username : "Avijit"}
              </p>
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
            {post.title}
          </p>
          <img src={`${post.image}`} className="PostImages" alt="" />

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
                <p style={{ marginLeft: "6px" }} onClick={handleshow}>
                  {Comments.length} Comments
                </p>
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
          {show === true ? (
            <div style={{ padding: "10px" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={`${users?.other?.profile}`}
                  className="PostImage"
                  alt=""
                />
                <input
                  type="text"
                  className="commentinput"
                  onChange={(e) => setCommentwriting(e.target.value)}
                  placeholder="Write you thought"
                />
                <button className="addCommentBtn" onClick={handleComment}>
                  Post
                </button>
              </div>
              {Comments.map((item) => (
                <div style={{ alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img src={`${item.profile}`} className="PostImage" alt="" />
                    <p
                      style={{ marginLeft: "6px", fontSize: 17, marginTop: 6 }}>
                      {item.username}
                    </p>
                  </div>

                  <p
                    style={{
                      marginLeft: "55px",
                      textAlign: "start",
                      marginTop: -16,
                    }}>
                    {item.comment}
                  </p>
                  <p
                    style={{
                      marginLeft: "55px",
                      textAlign: "start",
                      marginTop: -10,
                      color: "#aaa",
                      fontSize: 11,
                    }}>
                    Reply
                  </p>
                </div>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
