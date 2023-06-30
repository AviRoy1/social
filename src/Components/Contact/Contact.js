import React, { useEffect, useState } from "react";
import "./contact.css";
import profileimage from "../images/Profile.png";
import Chatcontainer from "../ChatContainer/Chatcontainer";
import axios from "axios";
import { useSelector } from "react-redux";

const Contact = () => {
  const userDetails = useSelector((state) => state.user);
  let user = userDetails?.user;
  // console.log(user);
  let id = user?.other?._id;
  const accessToken = user.accessToken;

  const [users, setUsers] = useState([]);
  const [currentChatUser, setcurrentChatUser] = useState("");
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/post/following/${id}`,
          {
            headers: {
              token: accessToken,
            },
          }
        );
        setUsers(res.data);
      } catch (error) {}
    };
    getUser();
  }, []);

  const handleuser = (e) => {
    setcurrentChatUser(e);
  };

  return (
    <div className="mainContactContainer">
      <div>
        <div style={{ width: "20pc", padding: "10px" }}>
          <input
            type="search"
            placeholder="Search Your Friends"
            className="searchbarforcontact"
          />
        </div>
        <div className="userDetailContainer">
          {users.map((item) => (
            <div>
              {item?._id !== id ? (
                <div
                  className="usercontainer"
                  onClick={(e) => handleuser(item)}>
                  <img
                    src={`${item?.profile}`}
                    className="chatuserimage"
                    alt=""
                  />
                  <div style={{ marginLeft: "10px" }}>
                    <p
                      style={{
                        color: "black",
                        textAlign: "start",
                        marginTop: "5px",
                        fontSize: "15px",
                      }}>
                      {item?.username}
                    </p>
                    <p
                      style={{
                        color: "black",
                        textAlign: "start",
                        marginTop: "-16px",
                        fontSize: "14px",
                      }}>
                      Open your message
                    </p>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
      {currentChatUser !== "" ? (
        <Chatcontainer currentChatUser={currentChatUser} />
      ) : (
        <div style={{ marginLeft: "40px", marginTop: "10px" }}>
          <p style={{ fontSize: "30px", color: "#876b70" }}>
            Open your Message Tab to chat with your friend
          </p>
        </div>
      )}
    </div>
  );
};

export default Contact;
