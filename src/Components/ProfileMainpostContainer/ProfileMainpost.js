import React from "react";
import "./profilemainpost.css";
import Contentpost from "../ContentPostContainer/Contentpost";
import Post from "../PostContainer/Post";
import Coverimage from "../images/Profile.png";

const ProfileMainpost = () => {
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
      <Post />
      <Post />
    </div>
  );
};

export default ProfileMainpost;
