import React from "react";
import "./rightbar.css";
import ads from "../images/ads.jpg";
import image from "../images/Profile.png";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightcontainer">
        <div className="adsContainer">
          <img src={`${ads}`} className="adsimg" alt="" />
          <div>
            <p
              style={{
                textAlign: "start",
                marginLeft: "10px",
                marginTop: -20,
              }}>
              CodeDemy
            </p>
            <p
              style={{
                textAlign: "start",
                marginLeft: "10px",
                fontSize: "10px",
                marginTop: "-16px",
              }}>
              Buy Codedemy courses
            </p>
          </div>
        </div>

        <div className="adsContainer">
          <img src={`${image1}`} className="adsimg" alt="" />
          <div>
            <p
              style={{
                textAlign: "start",
                marginLeft: "10px",
                marginTop: -20,
              }}>
              CodeDemy
            </p>
            <p
              style={{
                textAlign: "start",
                marginLeft: "10px",
                fontSize: "10px",
                marginTop: "-16px",
              }}>
              Buy Codedemy courses
            </p>
          </div>
        </div>

        <div className="adsContainer">
          <img src={`${image2}`} className="adsimg" alt="" />
          <div>
            <p
              style={{
                textAlign: "start",
                marginLeft: "10px",
                marginTop: -20,
              }}>
              CodeDemy
            </p>
            <p
              style={{
                textAlign: "start",
                marginLeft: "10px",
                fontSize: "10px",
                marginTop: "-16px",
              }}>
              Buy Codedemy courses
            </p>
          </div>
        </div>
      </div>

      <div className="rightcontainer">
        <div className="adsContainer">
          <img src={`${ads}`} className="adsimg" alt="" />
          <div>
            <p
              style={{
                textAlign: "start",
                marginLeft: "10px",
                marginTop: -20,
              }}>
              CodeDemy
            </p>
            <p
              style={{
                textAlign: "start",
                marginLeft: "10px",
                fontSize: "10px",
                marginTop: "-16px",
              }}>
              Buy Codedemy courses
            </p>
          </div>
        </div>

        <div className="adsContainer">
          <img src={`${image1}`} className="adsimg" alt="" />
          <div>
            <p
              style={{
                textAlign: "start",
                marginLeft: "10px",
                marginTop: -20,
              }}>
              CodeDemy
            </p>
            <p
              style={{
                textAlign: "start",
                marginLeft: "10px",
                fontSize: "10px",
                marginTop: "-16px",
              }}>
              Buy Codedemy courses
            </p>
          </div>
        </div>

        <div className="adsContainer">
          <img src={`${image2}`} className="adsimg" alt="" />
          <div>
            <p
              style={{
                textAlign: "start",
                marginLeft: "10px",
                marginTop: -20,
              }}>
              CodeDemy
            </p>
            <p
              style={{
                textAlign: "start",
                marginLeft: "10px",
                fontSize: "10px",
                marginTop: "-16px",
              }}>
              Buy Codedemy courses
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
