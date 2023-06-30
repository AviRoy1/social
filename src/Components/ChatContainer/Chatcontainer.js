import React, { useEffect, useRef, useState } from "react";
import "./chatcontainer.css";
import profileimage from "../images/Profile.png";
import axios from "axios";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";

const Chatcontainer = ({ currentChatUser }) => {
  const userDetails = useSelector((state) => state.user);
  let user = userDetails?.user;
  const socket = useRef();
  // console.log(user);
  let id = user?.other?._id;
  const accessToken = user.accessToken;
  const scrollRef = useRef();
  const [message, setMessage] = useState("");
  const [inputmessage, setInputmessage] = useState("");
  const [arrivalMessage, setarrivalMessage] = useState(null);
  useEffect(() => {
    const getMessage = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/post/get/chat/msg/${id}/${currentChatUser._id}`,
          {
            headers: {
              token: accessToken,
            },
          }
        );
        setMessage(res.data);
      } catch (error) {}
    };
    getMessage();
  }, [currentChatUser._id]);
  // console.log(message);

  useEffect(() => {
    if (currentChatUser !== "") {
      socket.current = io("http://localhost:5000");
      socket.current.emit("addUser", id);
    }
  }, [id]);

  // console.log(socket);

  useEffect(
    (ref) => {
      setTimeout(
        () =>
          scrollRef?.current?.scrollIntoView({
            // inline: "center",
            behavior: "smooth",
          }),
        777
      );
      // scrollRef.current.scrollIntoView({ behavior: "smooth" });
    },
    [message]
  );

  const sendmsg = () => {
    const messages = {
      myself: true,
      message: inputmessage,
    };
    socket.current.emit("send-msg", {
      to: currentChatUser._id,
      from: id,
      message: inputmessage,
    });
    fetch(`http://localhost:5000/api/post/msg`, {
      method: "POST",
      headers: { "Content-Type": "application/JSON", token: accessToken },
      body: JSON.stringify({
        to: currentChatUser?._id,
        from: id,
        message: inputmessage,
      }),
    });
    setMessage(message.concat(messages));
  };

  useEffect(() => {
    if (socket.current) {
      socket.current.on("msg-receive", (msg) => {
        setarrivalMessage({ myself: false, message: msg });
      });
    }
  }, [arrivalMessage]);

  return (
    <div className="MainChatContainer">
      <div>
        <div
          style={{
            display: "flex",
            marginLeft: "30px",
            marginTop: "10px",
            backgroundColor: "rgb(241 243 241)",
            width: "70pc",
            padding: "5px",
            borderRadius: "10px",
          }}>
          <img
            src={`${currentChatUser?.profile}`}
            className="userProfile"
            alt=""
          />
          <p style={{ marginTop: "10px", marginLeft: "10px" }}>
            {currentChatUser?.username}
          </p>
        </div>

        <div className="msgContainer">
          {message !== ""
            ? message?.map((item) => (
                <div ref={scrollRef}>
                  {item.myself === false ? (
                    <div className="msg">
                      <img
                        src={`${currentChatUser?.profile}`}
                        className="chatuserprofile"
                        alt=""
                      />
                      <p className="msgTxt">{item?.message}</p>
                    </div>
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "30px",
                        backgroundColor: "rgb(241 243 241)",
                        marginTop: "10px",
                        marginLeft: "620px",
                        padding: "3px",
                        borderRadius: "10px",
                        width: "40%",
                        marginTop: "10px",
                      }}>
                      <p style={{ textAlign: "start", marginLeft: "10px" }}>
                        {item?.message}
                      </p>
                    </div>
                  )}
                </div>
              ))
            : ""}
        </div>

        <div className="msgSenderContainer">
          <input
            type="text"
            placeholder="Write your message here"
            id=""
            className="msginput"
            onChange={(e) => setInputmessage(e.target.value)}
          />
          <button className="msgbutton" onClick={sendmsg}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatcontainer;
