import React from "react";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import Leftbar from "../../Components/Leftsidecontainer/Leftbar";
import Mainpost from "../../Components/MainPostcontainer/Mainpost";
import Rightbar from "../../Components/Rightsidecontainer/Rightbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="ComponentCointainer">
        <Leftbar />
        <Mainpost />
        <Rightbar />
      </div>
    </div>
  );
};

export default Home;
