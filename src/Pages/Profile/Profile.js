import React from "react";
import "./profile.css";
import Navbar from "../../Components/Navbar/Navbar";
import ProfileLeftbar from "../../Components/ProfileLeftContainer/ProfileLeftbar";
import ProfileRightbar from "../../Components/ProfileRightContainer/ProfileRightbar";
import Mainpost from "../../Components/MainPostcontainer/Mainpost";

const Profile = () => {
  return (
    <div className="profileContainer">
      <Navbar />
      <div className="subProfileContainer">
        <ProfileLeftbar />
        <Mainpost />
        <ProfileRightbar />
      </div>
    </div>
  );
};

export default Profile;
