import React, { useEffect, useState } from "react";
import "./profilerightbar.css";
import ads from "../images/ads.jpg";
import axios from "axios";
import Follow from "../Rightsidecontainer/follow";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const ProfileRightbar = () => {
  const userDetails = useSelector((state) => state.user);
  const user = userDetails.user;
  let location = useLocation();
  const id = location.pathname.split("/")[2];
  let idforSuggest = user?.other?._id;
  let username = !user.other.username ? "Tester1" : user.other.username;
  const [Followers, setFollowers] = useState([]);
  useEffect(() => {
    const getFollowing = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/post/followers/${id}`
        );
        setFollowers(res.data);
      } catch (error) {
        console.log("error occurs");
      }
    };
    getFollowing();
  }, []);
  // console.log(Followers);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/user/all/user/${idforSuggest}`
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
                <img
                  src={`${item.others.profile}`}
                  className="Friendsimage"
                  alt=""
                />
                <p style={{ textAlign: "start", marginLeft: "10px" }}>
                  {item.others.username}
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
