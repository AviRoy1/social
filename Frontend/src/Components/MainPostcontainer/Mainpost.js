import React, { useEffect, useState } from "react";
import "./mainpost.css";
import Contentpost from "../ContentPostContainer/Contentpost";
import Post from "../PostContainer/Post";
import axios from "axios";
import { useSelector } from "react-redux";

const Mainpost = () => {
  const userDetails = useSelector((state) => state.user);
  let user = userDetails?.user;
  // console.log(user);
  let id = user?.other?._id;
  const accessToken = user.accessToken;
  const [post, setPost] = useState([]);
  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/user/flw/${id}`,
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
      {post.map((item) => (
        <Post post={item} />
      ))}
    </div>
  );
};

export default Mainpost;
