import React, { useEffect, useState } from "react";
import "./profilemainpost.css";
import Contentpost from "../ContentPostContainer/Contentpost";
import Post from "../ProfilePostContainer/Post";
import Coverimage from "../images/Profile.png";
import axios from "axios";

const ProfileMainpost = () => {
  const [post, setPost] = useState([]);
  const userId = "6490456d1f0d9ef7234d8e5d";
  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTA0NTZkMWYwZDllZjcyMzRkOGU1ZCIsImlhdCI6MTY4NzMzMDE4NH0.u46Ppue_VyVXotmAs5OtQMwQcUhhpTrkNYNVtbi4pAc";

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/post/get/post/6490456d1f0d9ef7234d8e5d`
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
