import React, { useState } from "react";
import "./contentpost.css";
import profileImage from "../images/Profile.png";
import imageIcon from "../images/gallery.png";
import emojiIcons from "../images/cat-face.png";
import voiceIcon from "../images/video.png";
import { useSelector } from "react-redux";
import app from "../../firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const Contentpost = () => {
  const userDetails = useSelector((state) => state.user);
  let user = userDetails?.user;
  // console.log(user);
  let id = user?.other?._id;
  const accessToken = user.accessToken;
  const [file, setFile] = useState(null);
  const [file2, setFile2] = useState(null);
  const [title, setTitle] = useState("");

  const handlePost = (e) => {
    e.preventDefault();
    if (file !== null) {
      const fileName = new Date().getTime() + file?.name;
      const storage = getStorage(app);
      const StorageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(StorageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            fetch(`http://localhost:5000/api/post/user/post`, {
              method: "POST",
              headers: {
                "Content-Type": "application/JSON",
                token: accessToken,
              },
              body: JSON.stringify({ title: title, image: downloadURL }),
            });
          });
        }
      );
    } else if (file2 !== null) {
      const fileName = new Date().getTime() + file2?.name;
      const storage = getStorage(app);
      const StorageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(StorageRef, file2);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            fetch(`http://localhost:5000/api/post/user/post`, {
              method: "POST",
              headers: {
                "Content-Type": "application/JSON",
                token: accessToken,
              },
              body: JSON.stringify({ title: title, video: downloadURL }),
            });
          });
        }
      );
    } else {
      fetch(`http://localhost:5000/api/post/user/post`, {
        method: "POST",
        headers: {
          "Content-Type": "application/JSON",
          token: accessToken,
        },
        body: JSON.stringify({ title: title }),
      });
    }
  };

  return (
    <div>
      <div className="ContentUploadContainer">
        <div style={{ display: "flex", alignItems: "center", padding: 10 }}>
          <img src={`${user.other.profile}`} className="profileImage" alt="" />
          <input
            type="text"
            className="contentWritingPart"
            placeholder="Write your real thought....."
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div style={{ display: "flex", marginLeft: "10px" }}>
          <div>
            <label htmlFor="file">
              <img src={`${imageIcon}`} className="icons" alt="" />
              <input
                type="file"
                name="file"
                id="file"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <img src={`${emojiIcons}`} className="icons" alt="" />
            <label htmlFor="file2">
              <img src={`${voiceIcon}`} className="icons" alt="" />

              <input
                type="file"
                name="file2"
                id="file2"
                style={{ display: "none" }}
                onChange={(e) => setFile2(e.target.files[0])}
              />
            </label>
            <button
              style={{
                marginLeft: "350px",
                paddingLeft: "20px",
                paddingRight: "20px",
                paddingTop: 6,
                paddingBottom: 6,
                border: "none",
                backgroundColor: "black",
                color: "white",
                borderRadius: "6px",
                cursor: "pointer",
              }}
              onClick={handlePost}>
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contentpost;
