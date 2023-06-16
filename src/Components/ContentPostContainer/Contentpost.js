import React from "react";
import "./contentpost.css";
import profileImage from "../images/Profile.png";
import imageIcon from "../images/gallery.png";
import emojiIcons from "../images/cat-face.png";
import voiceIcon from "../images/Profile.png";

const Contentpost = () => {
  return (
    <div>
      <div className="ContentUploadContainer">
        <div style={{ display: "flex", alignItems: "center", padding: 10 }}>
          <img src={`${profileImage}`} className="profileImage" alt="" />
          <input
            type="text"
            className="contentWritingPart"
            placeholder="Write your real thought....."
          />
        </div>
        <div style={{ display: "flex", marginLeft: "10px" }}>
          <div>
            <img src={`${imageIcon}`} className="icons" alt="" />
            <img src={`${emojiIcons}`} className="icons" alt="" />
            <img src={`${voiceIcon}`} className="icons" alt="" />
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
