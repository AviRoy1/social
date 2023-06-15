import React from "react";
import "./rightbar.css";
import ads from "../images/ads.jpg";
import image from "../images/Profile.png";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import addFriend from "../images/add-user.png";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightcontainer">
        <div className="adsContainer">
          <img src={`${ads}`} className="adsimg" alt="" />
          <div>
            <p
              style={{
                textAlign: "start",
                marginLeft: "10px",
                marginTop: -20,
              }}>
              CodeDemy
            </p>
            <p
              style={{
                textAlign: "start",
                marginLeft: "10px",
                fontSize: "10px",
                marginTop: "-16px",
              }}>
              Buy Codedemy courses
            </p>
          </div>
        </div>

        <div className="adsContainer">
          <img src={`${image1}`} className="adsimg" alt="" />
          <div>
            <p
              style={{
                textAlign: "start",
                marginLeft: "10px",
                marginTop: -20,
              }}>
              CodeDemy
            </p>
            <p
              style={{
                textAlign: "start",
                marginLeft: "10px",
                fontSize: "10px",
                marginTop: "-16px",
              }}>
              Buy Codedemy courses
            </p>
          </div>
        </div>
      </div>

      <div className="rightcontainer2">
        <h3 style={{ textAlign: "start", marginLeft: "12px" }}>
          Suggested for you
        </h3>
        <div style={{ marginTop: "-10px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}>
              <img src={`${image4}`} className="Profileimg" alt="" />
              <div>
                <p style={{ marginLeft: "10px", textAlign: "start" }}>
                  Adggh Loru
                </p>
                <p
                  style={{
                    marginLeft: "10px",
                    textAlign: "start",
                    marginTop: "-16px",
                    fontSize: "11px",
                    color: "#aaa",
                  }}>
                  Suggested for you
                </p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#aaa",
                padding: "10px",
                marginRight: 13,
                borderRadius: "50%",
                cursor: "pointer",
              }}>
              <img src={`${addFriend}`} className="addFriend" alt="" />
            </div>
          </div>
        </div>

        <div style={{ marginTop: "-10px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}>
              <img src={`${image6}`} className="Profileimg" alt="" />
              <div>
                <p style={{ marginLeft: "10px", textAlign: "start" }}>
                  Adggh Loru
                </p>
                <p
                  style={{
                    marginLeft: "10px",
                    textAlign: "start",
                    marginTop: "-16px",
                    fontSize: "11px",
                    color: "#aaa",
                  }}>
                  Suggested for you
                </p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#aaa",
                padding: "10px",
                marginRight: 13,
                borderRadius: "50%",
                cursor: "pointer",
              }}>
              <img src={`${addFriend}`} className="addFriend" alt="" />
            </div>
          </div>
        </div>

        <div style={{ marginTop: "-10px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}>
              <img src={`${image1}`} className="Profileimg" alt="" />
              <div>
                <p style={{ marginLeft: "10px", textAlign: "start" }}>
                  KK Loru
                </p>
                <p
                  style={{
                    marginLeft: "10px",
                    textAlign: "start",
                    marginTop: "-16px",
                    fontSize: "11px",
                    color: "#aaa",
                  }}>
                  Suggested for you
                </p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#aaa",
                padding: "10px",
                marginRight: 13,
                borderRadius: "50%",
                cursor: "pointer",
              }}>
              <img src={`${addFriend}`} className="addFriend" alt="" />
            </div>
          </div>
        </div>

        <div style={{ marginTop: "-10px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}>
              <img src={`${image2}`} className="Profileimg" alt="" />
              <div>
                <p style={{ marginLeft: "10px", textAlign: "start" }}>
                  Sujon Loru
                </p>
                <p
                  style={{
                    marginLeft: "10px",
                    textAlign: "start",
                    marginTop: "-16px",
                    fontSize: "11px",
                    color: "#aaa",
                  }}>
                  Suggested for you
                </p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#aaa",
                padding: "10px",
                marginRight: 13,
                borderRadius: "50%",
                cursor: "pointer",
              }}>
              <img src={`${addFriend}`} className="addFriend" alt="" />
            </div>
          </div>
        </div>

        <div style={{ marginTop: "-10px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}>
              <img src={`${image6}`} className="Profileimg" alt="" />
              <div>
                <p style={{ marginLeft: "10px", textAlign: "start" }}>
                  Lalu Bal
                </p>
                <p
                  style={{
                    marginLeft: "10px",
                    textAlign: "start",
                    marginTop: "-16px",
                    fontSize: "11px",
                    color: "#aaa",
                  }}>
                  Suggested for you
                </p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#aaa",
                padding: "10px",
                marginRight: 13,
                borderRadius: "50%",
                cursor: "pointer",
              }}>
              <img src={`${addFriend}`} className="addFriend" alt="" />
            </div>
          </div>
        </div>

        <div style={{ marginTop: "-10px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}>
              <img src={`${image3}`} className="Profileimg" alt="" />
              <div>
                <p style={{ marginLeft: "10px", textAlign: "start" }}>
                  Dk Paul
                </p>
                <p
                  style={{
                    marginLeft: "10px",
                    textAlign: "start",
                    marginTop: "-16px",
                    fontSize: "11px",
                    color: "#aaa",
                  }}>
                  Suggested for you
                </p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#aaa",
                padding: "10px",
                marginRight: 13,
                borderRadius: "50%",
                cursor: "pointer",
              }}>
              <img src={`${addFriend}`} className="addFriend" alt="" />
            </div>
          </div>
        </div>
        <div style={{ marginTop: "-10px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}>
              <img src={`${image4}`} className="Profileimg" alt="" />
              <div>
                <p style={{ marginLeft: "10px", textAlign: "start" }}>
                  Adggh Loru
                </p>
                <p
                  style={{
                    marginLeft: "10px",
                    textAlign: "start",
                    marginTop: "-16px",
                    fontSize: "11px",
                    color: "#aaa",
                  }}>
                  Suggested for you
                </p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#aaa",
                padding: "10px",
                marginRight: 13,
                borderRadius: "50%",
                cursor: "pointer",
              }}>
              <img src={`${addFriend}`} className="addFriend" alt="" />
            </div>
          </div>
        </div>
        <div style={{ marginTop: "-10px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}>
              <img src={`${image4}`} className="Profileimg" alt="" />
              <div>
                <p style={{ marginLeft: "10px", textAlign: "start" }}>
                  Adggh Loru
                </p>
                <p
                  style={{
                    marginLeft: "10px",
                    textAlign: "start",
                    marginTop: "-16px",
                    fontSize: "11px",
                    color: "#aaa",
                  }}>
                  Suggested for you
                </p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#aaa",
                padding: "10px",
                marginRight: 13,
                borderRadius: "50%",
                cursor: "pointer",
              }}>
              <img src={`${addFriend}`} className="addFriend" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
