import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./screens/Login/Login";
import HeaderFooterLayout from "./HeaderFooterLayout";
import Profile from "./screens/Profile";

import Register from "./screens/Login/Register";
import AdminDashboard from "./screens/Admin/Dashboard/Dashboard";



function Url_Routes() {
  return (
    <BrowserRouter>
      <Routes>


        <Route exact path="/profile" element={<HeaderFooterLayout Component={<Profile />} />} />


        <Route exact path="/dashboard" element={<HeaderFooterLayout Component={<AdminDashboard />} />} />


        <Route exact path="/" element={<Login />} />

        <Route exact path="/registration" element={<Register />} />

      </Routes>
    </BrowserRouter>
  );
}

export default Url_Routes;
