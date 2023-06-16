import React from "react";
import "./profilerightbar.css";
import ads from "../images/ads.jpg";
import image from "../images/Profile.png";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import addFriend from "../images/add-user.png";

const ProfileRightbar = () => {
  return (
    <div className="profilerightbar">
      <div className="profilerightcontainer">
        <h3 style={{ marginLeft: "15px" }}>Friend requests</h3>
        <div>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: 10,
                cursor: "pointer",
              }}>
              <img src={`${image1}`} className="Friendsimage" alt="" />
              <p style={{ textAlign: "start", marginLeft: "10px" }}>
                Akash Dkl want to make your friend
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <button
                style={{
                  paddingLeft: "30px",
                  paddingRight: "30px",
                  paddingTop: 5,
                  paddingBottom: 5,
                  border: "none",
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "10px",
                }}>
                Accept
              </button>
              <button
                style={{
                  paddingLeft: "30px",
                  paddingRight: "30px",
                  paddingTop: 5,
                  paddingBottom: 5,
                  border: "none",
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "10px",
                }}>
                Deny
              </button>
            </div>
          </div>

          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: 10,
                cursor: "pointer",
              }}>
              <img src={`${image3}`} className="Friendsimage" alt="" />
              <p style={{ textAlign: "start", marginLeft: "10px" }}>
                Jimmy Loop want to make your friend
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <button
                style={{
                  paddingLeft: "30px",
                  paddingRight: "30px",
                  paddingTop: 5,
                  paddingBottom: 5,
                  border: "none",
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "10px",
                }}>
                Accept
              </button>
              <button
                style={{
                  paddingLeft: "30px",
                  paddingRight: "30px",
                  paddingTop: 5,
                  paddingBottom: 5,
                  border: "none",
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "10px",
                }}>
                Deny
              </button>
            </div>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: 10,
                cursor: "pointer",
              }}>
              <img src={`${image5}`} className="Friendsimage" alt="" />
              <p style={{ textAlign: "start", marginLeft: "10px" }}>
                Fghyu Dalal want to make your friend
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <button
                style={{
                  paddingLeft: "30px",
                  paddingRight: "30px",
                  paddingTop: 5,
                  paddingBottom: 5,
                  border: "none",
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "10px",
                }}>
                Accept
              </button>
              <button
                style={{
                  paddingLeft: "30px",
                  paddingRight: "30px",
                  paddingTop: 5,
                  paddingBottom: 5,
                  border: "none",
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "10px",
                }}>
                Deny
              </button>
            </div>
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

export default ProfileRightbar;
