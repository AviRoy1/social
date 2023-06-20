import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
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
          <p className="createaccountText">Create New Account</p>
          <input type="text" placeholder="UserName" className="inputText" />
          <input type="text" placeholder="Phonenumber" className="inputText" />
          <input type="email" placeholder="Email" className="inputText" />
          <input type="password" placeholder="*****" className="inputText" />
          <button className="btnForSignup">Signup</button>
          <Link to="/">
            <p style={{ marginLeft: "30%", textAlign: "start" }}>
              Already have an account
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
