import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../Components/Redux/apiCall";

const VerifyEmail = () => {
  const dispatch = useDispatch();
  const [OTP, setOTP] = useState("");
  const user = useSelector((state) => state.user);
  const userDetails = user;
  const id = userDetails?.user;
  const handleOTP = () => {
    signup(dispatch, {
      OTP: OTP,
      user: id,
    });
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <div
        style={{
          width: "25%",
          padding: "20px",
          margin: "auto",
          borderRadius: "10px",
          backgroundColor: "black",
        }}>
        <p>Social Send Email</p>
        <form style={{ display: "flex", flexDirection: "column" }}>
          <input
            type={"number"}
            placeholder="Enter Your OTP"
            style={{
              flex: 1,
              minWidth: "40px",
              margin: "10px 0px",
              padding: "10px",
              borderRadius: "10px",
            }}
            onChange={(e) => setOTP(e.target.value)}
          />
          <button
            onClick={handleOTP}
            style={{
              width: "40%",
              border: "none",
              padding: "10px 20px",
              backgroundColor: "white",
              color: "black",
              borderRadius: "10px",
              margin: "20px 0px",
              cursor: "pointer",
            }}>
            Confirm OTP
          </button>
          <Link to={"/register"}>
            <p
              style={{
                textDecoration: "none",
                color: "white",
                cursor: "pointer",
                marginRight: "190px",
                fontSize: "14px",
              }}>
              Check your email to get a OTP
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default VerifyEmail;
