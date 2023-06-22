import React, { useEffect, useState } from "react";
import "./profilemainpost.css";
import Contentpost from "../ContentPostContainer/Contentpost";
import Post from "../ProfilePostContainer/Post";
import Coverimage from "../images/Profile.png";
import axios from "axios";
import { useLocation } from "react-router-dom";

const ProfileMainpost = () => {
  const [post, setPost] = useState([]);
  let location = useLocation();
  const id = location.pathname.split("/")[2];

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/post/get/post/${id}`
        );
        setPost(res.data);
      } catch (error) {
        console.log("error occured");
      }
    };
    getPost();
  }, []);
  // console.log(post);
  return (
    <div className="profilemainpostContainer">
      <div>
        <img src={`${Coverimage}`} className="profileCoverImage" alt="" />
        <h2
          style={{
            marginTop: -43,
            color: "white",
            textAlign: "start",
            marginLeft: "35px",
          }}>
          Your Profile
        </h2>
      </div>
      <Contentpost />
      {post.map((item) => (
        <Post detail={item} />
      ))}
    </div>
  );
};

export default ProfileMainpost;
