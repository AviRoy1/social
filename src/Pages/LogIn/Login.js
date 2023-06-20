import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="mainContainerforSignup">
      <div className="submainContainer">
        <div style={{ flex: 1, marginLeft: 150, marginBottom: "170px" }}>
          <p className="logoText">
            Soc<span className="part">ial</span>
          </p>
          <p className="introText">
            Connect with your <span className="part">family and friends </span>
          </p>
        </div>
        <div style={{ flex: 3 }}>
          <p className="createaccountText">Login Account</p>
          <input type="email" placeholder="Email" className="inputText" />
          <input type="password" placeholder="*****" className="inputText" />
          <button className="btnForSignup">Login</button>
          <Link to="/">
            <p style={{ marginLeft: "30%", textAlign: "start" }}>
              forgot password
            </p>
          </Link>
          <Link to="/">
            <p style={{ marginLeft: "30%", textAlign: "start" }}>
              Create new account
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
