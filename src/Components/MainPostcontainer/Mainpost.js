import React, { useEffect, useState } from "react";
import "./mainpost.css";
import Contentpost from "../ContentPostContainer/Contentpost";
import Post from "../PostContainer/Post";
import axios from "axios";

const Mainpost = () => {
  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTA0NTZkMWYwZDllZjcyMzRkOGU1ZCIsImlhdCI6MTY4NzMxNzc0OX0.lkzY49Jm6OpYi1LAFoOOCl_AzyOp-DafAUbJsiO4Xw8";
  const [post, setPost] = useState([]);
  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/user/flw/6490456d1f0d9ef7234d8e5d",
          {
            headers: {
              token: accessToken,
            },
          }
        );
        setPost(res.data);
      } catch (error) {}
    };
    getPost();
  }, []);
  // console.log(post);
  return (
    <div className="mainpostContainer">
      <Contentpost />
      {post.map((item) =>
        item.map((postdetails) => <Post post={postdetails} />)
      )}
    </div>
  );
};

export default Mainpost;
