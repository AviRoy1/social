import React, { useState } from "react";
import "./contentpost.css";
import profileImage from "../images/Profile.png";
import imageIcon from "../images/gallery.png";
import emojiIcons from "../images/cat-face.png";
import voiceIcon from "../images/video.png";
import { useSelector } from "react-redux";

const Contentpost = () => {
  const userDetails = useSelector((state) => state.user);
  let user = userDetails?.user;
  // console.log(user);
  let id = user?.other?._id;

  const [file, setFile] = useState(null);

  return (
    <div>
      <div className="ContentUploadContainer">
        <div style={{ display: "flex", alignItems: "center", padding: 10 }}>
          <img src={`${user.other.profile}`} className="profileImage" alt="" />
          <input
            type="text"
            className="contentWritingPart"
            placeholder="Write your real thought....."
          />
        </div>
        <div style={{ display: "flex", marginLeft: "10px" }}>
          <div>
            <label htmlFor="file">
              <img src={`${imageIcon}`} className="icons" alt="" />
              <input
                type="file"
                name="file"
                id="file"
                style={{ display: "none" }}
              />
            </label>
            <img src={`${emojiIcons}`} className="icons" alt="" />
            <label htmlFor="file2">
              <img src={`${voiceIcon}`} className="icons" alt="" />

              <input
                type="file"
                name="file2"
                id="file2"
                style={{ display: "none" }}
              />
            </label>
            <button
              style={{
                marginLeft: "350px",
                paddingLeft: "20px",
                paddingRight: "20px",
                paddingTop: 6,
                paddingBottom: 6,
                border: "none",
                backgroundColor: "black",
                color: "white",
                borderRadius: "6px",
                cursor: "pointer",
              }}>
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contentpost;
