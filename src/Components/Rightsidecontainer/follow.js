import React, { useState } from "react";
import addFriend from "../images/add-user.png";
import userToFollow from "../images/afterFollowImg.png";

const Follow = ({ userdetail }) => {
  const [follow, setFollow] = useState(addFriend);
  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTA0NTZkMWYwZDllZjcyMzRkOGU1ZCIsImlhdCI6MTY4NzMxNzc0OX0.lkzY49Jm6OpYi1LAFoOOCl_AzyOp-DafAUbJsiO4Xw8";

  const handlefollow = async (e) => {
    await fetch(`http://localhost:5000/api/user/following/${userdetail._id}`, {
      method: "PUT",
      headers: { "Content-type": "application/JSON", token: accessToken },
      body: JSON.stringify({ user: "6490456d1f0d9ef7234d8e5d" }),
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
