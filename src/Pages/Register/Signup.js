import React, { useState } from "react";
import "./signup.css";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signup } from "../../Components/Redux/apiCall";
import app from "../../firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhonenumber] = useState("");
  const [file, setFile] = useState(null);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user);

  const handleClick = (e) => {
    e.preventDefault();
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
          signup(dispatch, {
            email,
            password,
            phoneNumber,
            username,
            profile: downloadURL,
          });

          window.location.reload(true);
        });
      }
    );
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
          <p className="createaccountText">Create New Account</p>
          <input
            type="file"
            name="file"
            id="file"
            className="inputText"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="UserName"
            onChange={(e) => setUsername(e.target.value)}
            className="inputText"
          />
          <input
            type="text"
            placeholder="Phonenumber"
            onChange={(e) => setPhonenumber(e.target.value)}
            className="inputText"
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="inputText"
          />
          <input
            type="password"
            placeholder="*****"
            onChange={(e) => setPassword(e.target.value)}
            className="inputText"
          />
          <button className="btnForSignup" onClick={handleClick}>
            Signup
          </button>
          <Link to="/">
            <p style={{ marginLeft: "30%", textAlign: "start" }}>
              Already have an account
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
