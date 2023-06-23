import React, { useState } from "react";
import addFriend from "../images/add-user.png";
import userToFollow from "../images/afterFollowImg.png";
import { useSelector } from "react-redux";

const Follow = ({ userdetail }) => {
  const userDetails = useSelector((state) => state.user);
  const user = userDetails.user;
  const id = user.other._id;
  let username = !user.other.username ? "Tester1" : user.other.username;
  const [follow, setFollow] = useState(addFriend);
  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTA0NTZkMWYwZDllZjcyMzRkOGU1ZCIsImlhdCI6MTY4NzMzMDE4NH0.u46Ppue_VyVXotmAs5OtQMwQcUhhpTrkNYNVtbi4pAc";

  const handlefollow = async (e) => {
    await fetch(`http://localhost:5000/api/user/following/${userdetail._id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/JSON",
        token: user.other.accessToken,
      },
      body: JSON.stringify({ user: `${id}` }),
    });
    setFollow(userToFollow);
  };

  return (
    <div style={{ marginTop: "-10px" }} key={userdetail._id}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          <img src={`${userdetail.profile}`} className="Profileimg" alt="" />
          <div>
            <p style={{ marginLeft: "10px", textAlign: "start" }}>
              {!userdetail.username ? "No name" : userdetail.username}
            </p>
            <p
              style={{
                marginLeft: "10px",
                textAlign: "start",
                marginTop: "-16px",
                fontSize: "11px",
                color: "#aaa",
              }}>
              Suggested for you
            </p>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#aaa",
            padding: "10px",
            marginRight: 13,
            borderRadius: "50%",
            cursor: "pointer",
          }}
          onClick={(e) => handlefollow(userdetail._id)}>
          <img src={`${follow}`} className="addFriend" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Follow;
