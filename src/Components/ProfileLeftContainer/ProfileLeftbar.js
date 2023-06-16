import React from "react";
import "./profileleftbar.css";
import image from "../images/Profile.png";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";

const ProfileLeftbar = () => {
  return (
    <div className="ProfileLeftbar">
      <div className="NotificationContainer">
        <img src={`${image}`} className="ProfilepageCover" alt="" />
        <div style={{ display: "flex", alignItems: "center", marginTop: -30 }}>
          <img src={`${image2}`} className="ProfilepageImage" alt="" />
          <p style={{ marginLeft: 10, marginTop: 24, color: "white" }}>
            Avijit
          </p>
        </div>
      </div>

      <div className="NotificationContainer">
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <p style={{ marginLeft: "-20px" }}>Explore</p>
          <p style={{ color: "#aaa", marginLeft: "40px" }}>See all</p>
        </div>
        <div>
          <img src={`${image}`} className="exploreimage" alt="" />
          <img src={`${image1}`} className="exploreimage" alt="" />
          <img src={`${image2}`} className="exploreimage" alt="" />
          <img src={`${image3}`} className="exploreimage" alt="" />
          <img src={`${image4}`} className="exploreimage" alt="" />
          <img src={`${image5}`} className="exploreimage" alt="" />
          <img src={`${image6}`} className="exploreimage" alt="" />
          <img src={`${image}`} className="exploreimage" alt="" />
          <img src={`${image}`} className="exploreimage" alt="" />
          <img src={`${image}`} className="exploreimage" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProfileLeftbar;
