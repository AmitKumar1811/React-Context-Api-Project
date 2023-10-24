import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import { Link } from "react-router-dom";
import "./Change.css";
const User_Profile = () => {
  const { username } = useContext(CartContext);
  return (
    <div className="userdata">
      <h1>User Page</h1>
      <h1>{username} </h1>

      <Link to="/History">Product History</Link>
      <Link to="/Changeprofile">Profile Update</Link>
      <Link to="/ChangePass">Change Password</Link>
    </div>
  );
};

export default User_Profile;
