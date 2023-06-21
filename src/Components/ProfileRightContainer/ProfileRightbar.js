import React, { useEffect, useState } from "react";
import "./profilerightbar.css";
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
import Follow from "../Rightsidecontainer/follow";

const ProfileRightbar = () => {
  const [Followers, setFollowers] = useState([]);
  useEffect(() => {
    const getFollowing = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/post/followers/6490456d1f0d9ef7234d8e5d`
        );
        setFollowers(res.data);
      } catch (error) {
        console.log("error occurs");
      }
    };
    getFollowing();
  }, []);

  const [users, setUsers] = useState([]);
  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTA0NTZkMWYwZDllZjcyMzRkOGU1ZCIsImlhdCI6MTY4NzMzMDE4NH0.u46Ppue_VyVXotmAs5OtQMwQcUhhpTrkNYNVtbi4pAc";
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/user/all/user/6490456d1f0d9ef7234d8e5d`
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
    <div className="profilerightbar">
      <div className="profilerightcontainer">
        <h3 style={{ marginLeft: "15px" }}>Followers</h3>
        <div>
          {Followers.map((item) => (
            <div style={{ marginTop: "10px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: 10,
                  cursor: "pointer",
                }}>
                <img src={`${item.profile}`} className="Friendsimage" alt="" />
                <p style={{ textAlign: "start", marginLeft: "10px" }}>
                  {item.username}
                </p>
              </div>
            </div>
          ))}
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

export default ProfileRightbar;
