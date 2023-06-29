import React from "react";
import "./chatcontainer.css";
import profileimage from "../images/Profile.png";

const Chatcontainer = () => {
  return (
    <div className="MainChatContainer">
      <div>
        <div
          style={{
            display: "flex",
            marginLeft: "30px",
            marginTop: "10px",
            backgroundColor: "rgb(241 243 241)",
            width: "70pc",
            padding: "5px",
            borderRadius: "10px",
          }}>
          <img src={`${profileimage}`} className="userProfile" alt="" />
          <p style={{ marginTop: "10px", marginLeft: "10px" }}>Avijit</p>
        </div>

        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "30px",
              backgroundColor: "rgb(241 243 241)",
              marginTop: "10px",
              padding: "3px",
              borderRadius: "10px",
              width: "40%",
              marginTop: "10px",
            }}>
            <img src={`${profileimage}`} className="chatuserprofile" alt="" />
            <p style={{ textAlign: "start", marginLeft: "10px" }}>
              fwfn kwfkwmfjosc mlnvknsvsn sjfow ,sgosjglmsnskmvd
              dbkdjldmvlsmfpsfk db jdgldgm{" "}
            </p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "30px",
              backgroundColor: "rgb(241 243 241)",
              marginTop: "10px",
              padding: "3px",
              borderRadius: "10px",
              width: "40%",
              marginTop: "10px",
            }}>
            <img src={`${profileimage}`} className="chatuserprofile" alt="" />
            <p style={{ textAlign: "start", marginLeft: "10px" }}>
              fwfn kwfkwmfjosc mlnvknsvsn sjfow ,sgosjglmsnskmvd
              dbkdjldmvlsmfpsfk db jdgldgm{" "}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "30px",
              backgroundColor: "rgb(241 243 241)",
              marginTop: "10px",
              padding: "3px",
              borderRadius: "10px",
              width: "40%",
              marginTop: "10px",
            }}>
            <img src={`${profileimage}`} className="chatuserprofile" alt="" />
            <p style={{ textAlign: "start", marginLeft: "10px" }}>
              fwfn kwfkwmfjosc mlnvknsvsn sjfow ,sgosjglmsnskmvd
              dbkdjldmvlsmfpsfk db jdgldgm{" "}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "30px",
              backgroundColor: "rgb(241 243 241)",
              marginTop: "10px",
              padding: "3px",
              borderRadius: "10px",
              width: "40%",
              marginTop: "10px",
            }}>
            <img src={`${profileimage}`} className="chatuserprofile" alt="" />
            <p style={{ textAlign: "start", marginLeft: "10px" }}>
              fwfn kwfkwmfjosc mlnvknsvsn sjfow ,sgosjglmsnskmvd
              dbkdjldmvlsmfpsfk db jdgldgm{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatcontainer;
