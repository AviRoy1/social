import React from "react";
import "./navbar.css";
import searchIcon from "../images/search.png";
import Notification from "../images/bell.png";
import Message from "../images/message.png";
import Profileimage from "../images/Profile.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="mainNavbar">
      <div className="LogoContainer">
        <p style={{ marginLeft: "50px" }}>Social</p>
      </div>
      <div>
        <div className="SearchInputContainer">
          <img src={`${searchIcon}`} className="SearchIcons" alt="" />
          <input
            type="text"
            className="searchInput"
            name=""
            id=""
            placeholder="Search your friends"
          />
        </div>
      </div>
      <div className="IconsContainer">
        <img src={`${Notification}`} className="Icons" alt="" />
        <img src={`${Message}`} className="Icons" alt="" />
        <Link to={"/profile/8922103818wdw913819"}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={`${Profileimage}`} className="ProfileImage" alt="" />
            <p style={{ marginLeft: "5px" }}>Avijit</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
