import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Register/Signup";
import Login from "./Pages/LogIn/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile/:id" element={<Profile />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
