import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./Pages/Register/Signup";
import Login from "./Pages/LogIn/Login";
import { useSelector } from "react-redux";
import VerifyEmail from "./Pages/VerificationEmail/VerifyEmail";

function App() {
  const userDetails = useSelector((state) => state.user);
  const user = userDetails.user;
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              user.other.verified === true ? <Home /> : <Login />
            }></Route>
          <Route
            path="/profile/:id"
            element={user !== null ? <Profile /> : <Login />}></Route>
          <Route
            path="/signup"
            element={
              // user !== null ? <Navigate to={"/"} /> : <Signup />
              <Signup />
            }></Route>
          <Route
            path="/login"
            element={
              // user !== null ? <Navigate to={"/"} /> : <Login />
              <Login />
            }></Route>
          <Route
            path="/verify/email"
            element={
              user.Status === "Pending" ? <VerifyEmail /> : <Home />
            }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
