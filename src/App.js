import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Logout from "./components/Logout";
import CreatePost from "./components/CreatePost";
import Navbar from "./components/Navbar";
import { useState } from "react";
function App() {
  const [isAuth, setisAuth] = useState(false);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/createPost" element={<CreatePost />}></Route>
        <Route path="/login" element={<Login setisAuth={setisAuth}/>}></Route>
        <Route path="/logout" element={<Logout />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
