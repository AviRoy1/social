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
          <div>
            <h3
              style={{
                marginLeft: 10,
                marginTop: 24,
                color: "black",
                textAlign: "start",
              }}>
              Avijit
            </h3>
            <p
              style={{
                marginLeft: 10,
                marginTop: 24,
                color: "black",
                textAlign: "start",
                marginTop: -16,
                fontSize: 13,
              }}>
              Web Developer
            </p>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ color: "black", marginLeft: 20, fontSize: "14px" }}>
            Profile Views
          </p>
          <p
            style={{
              color: "black",
              marginRight: 20,
              fontSize: "12px",
              marginTop: 17,
            }}>
            43
          </p>
        </div>
        {/* <hr style={{ marginTop: -10 }} /> */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: -20,
          }}>
          <p style={{ color: "black", marginLeft: 20, fontSize: "14px" }}>
            Flollowers
          </p>
          <p
            style={{
              color: "black",
              marginRight: 20,
              fontSize: "12px",
              marginTop: 17,
            }}>
            43
          </p>
        </div>
        {/* <hr style={{ marginTop: -10 }} /> */}
        <div style={{ marginTop: -10 }}>
          <h2
            style={{
              color: "black",
              marginLeft: 10,
              fontSize: "17px",
              textAlign: "start",
            }}>
            User Bio
          </h2>
          <p
            style={{
              color: "black",
              marginRight: 20,
              fontSize: "14px",
              marginTop: -10,
              marginLeft: 10,
              marginRight: 10,
              textAlign: "start",
            }}>
            This my bio.....xxsdwdwd....dwdwdw......he kklsol wdwkdn lksms
          </p>
        </div>
        <button
          style={{
            width: "100%",
            paddingTop: 7,
            paddingBottom: 7,
            border: "none",
            backgroundColor: "green",
            color: "black",
          }}>
          Edit Bio
        </button>
      </div>

      <div className="NotificationContainer">
        <h3 style={{ marginLeft: 90 }}>Followings</h3>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ marginLeft: 10 }}>Following</p>
          <p style={{ marginRight: 10, color: "#aaa" }}>See all</p>
        </div>
        <div>
          <div style={{ display: "flex", flexWrap: "wrap", marginLeft: 5 }}>
            <div style={{ marginLeft: 4, cursor: "pointer" }}>
              <img src={`${image1}`} className="friendImage" alt="" />
              <p style={{ marginTop: -2 }}>Paves Dan</p>
            </div>
            <div style={{ marginLeft: 4, cursor: "pointer" }}>
              <img src={`${image2}`} className="friendImage" alt="" />
              <p style={{ marginTop: -2 }}>Samn Dev</p>
            </div>
            <div style={{ marginLeft: 4, cursor: "pointer" }}>
              <img src={`${image3}`} className="friendImage" alt="" />
              <p style={{ marginTop: -2 }}>Kunal Kam</p>
            </div>
            <div style={{ marginLeft: 4, cursor: "pointer" }}>
              <img src={`${image6}`} className="friendImage" alt="" />
              <p style={{ marginTop: -2 }}>SK lund</p>
            </div>
            <div style={{ marginLeft: 4, cursor: "pointer" }}>
              <img src={`${image5}`} className="friendImage" alt="" />
              <p style={{ marginTop: -2 }}>Urman</p>
            </div>
            <div style={{ marginLeft: 4, cursor: "pointer" }}>
              <img src={`${image1}`} className="friendImage" alt="" />
              <p style={{ marginTop: -2 }}>Bikas DD</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLeftbar;
