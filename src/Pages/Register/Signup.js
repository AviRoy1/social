import React, { useState } from "react";
import "./signup.css";
import { UseSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhonenumber] = useState("");

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
          <input
            type="text"
            placeholder="UserName"
            onChange={(e) => setUsername(e.target.value)}
            className="inputText"
          />
          <input
            type="text"
            placeholder="Phonenumber"
            onChange={(e) => setPhonenumber(e.target.value)}
            className="inputText"
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="inputText"
          />
          <input
            type="password"
            placeholder="*****"
            onChange={(e) => setPassword(e.target.value)}
            className="inputText"
          />
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
