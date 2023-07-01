import React from "react";
import "./profile.css";
import Navbar from "../../Components/Navbar/Navbar";
import ProfileLeftbar from "../../Components/ProfileLeftContainer/ProfileLeftbar";
import ProfileRightbar from "../../Components/ProfileRightContainer/ProfileRightbar";
import ProfileMainpost from "../../Components/ProfileMainpostContainer/ProfileMainpost";
import { useSelector } from "react-redux";

const Profile = () => {
  const userDetails = useSelector((state) => state.user);
  const user = userDetails.user;
  return (
    <div className="profileContainer">
      <Navbar />
      <div className="subProfileContainer">
        <ProfileLeftbar />
        <ProfileMainpost />
        <ProfileRightbar />
      </div>
    </div>
  );
};

export default Profile;
