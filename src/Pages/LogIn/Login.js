import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Components/Redux/apiCall";

const Login = () => {
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlerClick = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
  };

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
          <input
            type="email"
            placeholder="Email"
            id="email"
            className="inputText"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="*****"
            id="password"
            className="inputText"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btnForSignup" onClick={handlerClick}>
            Login
          </button>
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
