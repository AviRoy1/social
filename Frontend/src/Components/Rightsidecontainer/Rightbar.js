import React, { useEffect, useState } from "react";
import "./rightbar.css";
import ads from "../images/ads.jpg";
import image from "../images/Profile.png";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import addFriend from "../images/add-user.png";
import axios from "axios";
import Follow from "./follow";
import { useSelector } from "react-redux";

const Rightbar = () => {
  const userDetails = useSelector((state) => state.user);
  const user = userDetails.user;
  const id = user.other._id;
  const [users, setUsers] = useState([]);
  // const accessToken =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTA0NTZkMWYwZDllZjcyMzRkOGU1ZCIsImlhdCI6MTY4NzMzMDE4NH0.u46Ppue_VyVXotmAs5OtQMwQcUhhpTrkNYNVtbi4pAc";
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/user/all/user/${id}`
        );
        setUsers(res.data);
      } catch (error) {
        console.log("Some error occured");
      }
    };
    getUser();
  }, []);
  // console.log(users);

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
      </div>

      <div className="rightcontainer2">
        <h3 style={{ textAlign: "start", marginLeft: "12px" }}>
          Suggested for you
        </h3>
        {users.map((item) => (
          <Follow userdetail={item} />
        ))}
      </div>
    </div>
  );
};

export default Rightbar;
