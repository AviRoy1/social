import React, { useEffect, useState } from "react";
import "./leftbar.css";
import image from "../images/Profile.png";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import axios from "axios";
import { useSelector } from "react-redux";

const Leftbar = () => {
  const userDetails = useSelector((state) => state.user);
  let user = userDetails?.user;
  // console.log(user);
  let id = user?.other?._id;
  const accessToken = user.accessToken;

  const [post, setPost] = useState([]);
  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/user/flw/${id}`,
          {
            headers: {
              token: accessToken,
            },
          }
        );
        setPost(res.data);
      } catch (error) {}
    };
    getPost();
  }, []);

  return (
    <div className="Leftbar">
      <div className="NotificationContainer">
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <p style={{ marginLeft: "-14px" }}>Notifications</p>
          <p style={{ color: "#aaa", marginLeft: "40px" }}>See all</p>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={`${image}`} className="notificationimg" alt="" />
          <p
            style={{
              marginLeft: "5px",
              color: "#aaa",
              fontSize: 13,
              textAlign: "start",
              width: "120px",
            }}>
            Rohit like your post
          </p>
          <img src={`${image}`} className="likeimage" alt="" />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={`${image}`} className="notificationimg" alt="" />
          <p
            style={{
              marginLeft: "5px",
              color: "#aaa",
              fontSize: 13,
              textAlign: "start",
              width: "120px",
            }}>
            Modon started to follow you
          </p>
          <img src={`${image2}`} className="likeimage" alt="" />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={`${image1}`} className="notificationimg" alt="" />
          <p
            style={{
              marginLeft: "5px",
              color: "#aaa",
              fontSize: 13,
              textAlign: "start",
              width: "120px",
            }}>
            Rohit like your post
          </p>
          <img src={`${image1}`} className="likeimage" alt="" />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={`${image4}`} className="notificationimg" alt="" />
          <p
            style={{
              marginLeft: "5px",
              color: "#aaa",
              fontSize: 13,
              textAlign: "start",
              width: "120px",
            }}>
            Rohit like your post
          </p>
          <img src={`${image4}`} className="likeimage" alt="" />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={`${image5}`} className="notificationimg" alt="" />
          <p
            style={{
              marginLeft: "5px",
              color: "#aaa",
              fontSize: 13,
              textAlign: "start",
              width: "120px",
            }}>
            Rohit like your post
          </p>
          <img src={`${image5}`} className="likeimage" alt="" />
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={`${image6}`} className="notificationimg" alt="" />
          <p
            style={{
              marginLeft: "5px",
              color: "#aaa",
              fontSize: 13,
              textAlign: "start",
              width: "120px",
            }}>
            Rohit like your post
          </p>
          <img src={`${image6}`} className="likeimage" alt="" />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={`${image2}`} className="notificationimg" alt="" />
          <p
            style={{
              marginLeft: "5px",
              color: "#aaa",
              fontSize: 13,
              textAlign: "start",
              width: "120px",
            }}>
            Rohit like your post
          </p>
          <img src={`${image2}`} className="likeimage" alt="" />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={`${image}`} className="notificationimg" alt="" />
          <p
            style={{
              marginLeft: "5px",
              color: "#aaa",
              fontSize: 13,
              textAlign: "start",
              width: "120px",
            }}>
            Rohit like your post
          </p>
          <img src={`${image}`} className="likeimage" alt="" />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={`${image}`} className="notificationimg" alt="" />
          <p
            style={{
              marginLeft: "5px",
              color: "#aaa",
              fontSize: 13,
              textAlign: "start",
              width: "120px",
            }}>
            Rohit like your post
          </p>
          <img src={`${image}`} className="likeimage" alt="" />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={`${image}`} className="notificationimg" alt="" />
          <p
            style={{
              marginLeft: "5px",
              color: "#aaa",
              fontSize: 13,
              textAlign: "start",
              width: "120px",
            }}>
            Rohit like your post
          </p>
          <img src={`${image}`} className="likeimage" alt="" />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={`${image}`} className="notificationimg" alt="" />
          <p
            style={{
              marginLeft: "5px",
              color: "#aaa",
              fontSize: 13,
              textAlign: "start",
              width: "120px",
            }}>
            Rohit like your post
          </p>
          <img src={`${image}`} className="likeimage" alt="" />
        </div>
      </div>

      <div className="NotificationContainer">
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <p style={{ marginLeft: "-20px" }}>Explore</p>
          <p style={{ color: "#aaa", marginLeft: "40px" }}>See all</p>
        </div>
        <div>
          {post.map((item) => (
            <img src={`${item.image}`} className="exploreimage" alt="" />
          ))}

          {/* <img src={`${image1}`} className="exploreimage" alt="" />
          <img src={`${image2}`} className="exploreimage" alt="" />
          <img src={`${image3}`} className="exploreimage" alt="" />
          <img src={`${image4}`} className="exploreimage" alt="" />
          <img src={`${image5}`} className="exploreimage" alt="" />
          <img src={`${image6}`} className="exploreimage" alt="" />
          <img src={`${image}`} className="exploreimage" alt="" />
          <img src={`${image}`} className="exploreimage" alt="" />
          <img src={`${image}`} className="exploreimage" alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
