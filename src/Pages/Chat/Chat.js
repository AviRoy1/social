import React from "react";
import Contact from "../../Components/Contact/Contact";
import Chatcontainer from "../../Components/ChatContainer/Chatcontainer";
import Navbar from "../../Components/Navbar/Navbar";

const Chat = () => {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Contact />
        {/* <Chatcontainer /> */}
      </div>
    </div>
  );
};

export default Chat;
