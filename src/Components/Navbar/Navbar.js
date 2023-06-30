import React from "react";
import "./navbar.css";
import searchIcon from "../images/search.png";
import Notification from "../images/bell.png";
import Message from "../images/message.png";
import Profileimage from "../images/Profile.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/useReducer";

const Navbar = () => {
  const userDetails = useSelector((state) => state.user);
  let user = userDetails?.user;
  // console.log(user);
  let id = user?.other?._id;
  let username = !user.other.username ? "Tester" : user.other.username;
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="mainNavbar">
      <div className="LogoContainer" style={{ marginLeft: "30px" }}>
        <Link to="/">
          <p style={{ marginLeft: "20px", fontSize: "20px", color: "red" }}>
            Social
          </p>
        </Link>
      </div>
      <div>
        <div className="searchInputContainer">
          <img src={`${searchIcon}`} className="searchIcon" alt="" />
          <input
            type="text"
            className="searchInput"
            placeholder="search your friends"
            name=""
            id=""
          />
        </div>
      </div>
      <div className="IconsContainer">
        <img src={`${Notification}`} className="Icons" alt="" />
        <Link to={`/chat`}>
          <img src={`${Message}`} className="Icons" alt="" />
        </Link>

        <Link to={`/Profile/${id}`}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={`${user?.other?.profile}`}
              className="ProfileImage"
              alt=""
            />
            <p style={{ marginLeft: "5px" }}>{username}</p>
          </div>
        </Link>
        <div
          style={{ marginRight: "30px", marginLeft: "20px", cursor: "pointer" }}
          onClick={handleLogout}>
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
