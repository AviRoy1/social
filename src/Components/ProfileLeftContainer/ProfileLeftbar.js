import React, { useEffect, useState } from "react";
import "./profileleftbar.css";
import image from "../images/Profile.png";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const ProfileLeftbar = () => {
  const [users, setUser] = useState([]);
  const userDetails = useSelector((state) => state.user);
  const user = userDetails.user;

  let location = useLocation();
  const id = location.pathname.split("/")[2];
  const [Follow, UnFollow] = useState([
    user.other.following.includes(id) ? "Unfollow" : "Follow",
  ]);
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/user/post/user/details/${id}`
        );
        setUser(res.data);
      } catch (error) {
        console.log("Some error occured");
      }
    };
    getUser();
  }, []);

  let username = !users.username ? "Tester1" : users.username;
  let followerscount = users?.followers?.length;
  let followingcount = users?.following?.length;

  const [Followinguser, setFollowinguser] = useState([]);
  useEffect(() => {
    const getFollowing = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/post/following/${id}`
        );
        setFollowinguser(res.data);
      } catch (error) {
        console.log("error occurs");
      }
    };
    getFollowing();
  }, []);

  const handleFollow = async () => {
    await fetch(`http://localhost:5000/api/user/following/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/JSON",
        token: user.other.accessToken,
      },
      body: JSON.stringify({ user: `${user.id}` }),
    });
    UnFollow("Unfollow");
  };

  // console.log(Followinguser);

  return (
    <div className="ProfileLeftbar">
      <div className="NotificationContainer">
        <img src={`${image}`} className="ProfilepageCover" alt="" />
        <div style={{ display: "flex", alignItems: "center", marginTop: -30 }}>
          <img src={`${users.profile}`} className="ProfilepageImage" alt="" />
          <div>
            <h3
              style={{
                marginLeft: 10,
                marginTop: 24,
                color: "black",
                textAlign: "start",
              }}>
              {username}
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
            Followings
          </p>
          <p
            style={{
              color: "black",
              marginRight: 20,
              fontSize: "12px",
              marginTop: 17,
            }}>
            {followingcount}
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
            {followerscount}
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
        {user.other._id !== id ? (
          <div onClick={handleFollow}>
            <button
              style={{
                width: "100%",
                paddingTop: 7,
                paddingBottom: 7,
                border: "none",
                backgroundColor: "green",
                color: "black",
              }}>
              {Follow}
            </button>
          </div>
        ) : (
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
        )}
      </div>

      <div className="NotificationContainer">
        <h3 style={{ marginLeft: 90 }}>Followings</h3>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ marginLeft: 10 }}>Following</p>
          <p style={{ marginRight: 10, color: "#aaa" }}>See all</p>
        </div>
        <div>
          <div style={{ display: "flex", flexWrap: "wrap", marginLeft: 5 }}>
            {Followinguser.map((item) => (
              <Link to={`/Profile/${item._id}`}>
                <div
                  style={{ marginLeft: 4, cursor: "pointer" }}
                  key={item._id}>
                  <img src={`${item.profile}`} className="friendImage" alt="" />
                  <p style={{ marginTop: -2 }}>{item.username}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLeftbar;
