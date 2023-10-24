import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
const ChangePass = () => {
  const [current, setCurrrent] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const Changedata = async () => {
    try {
      const result = await axios.post(
        "https://shark.univisionz.in/aal/public/api/change-password",
        {
          current_password: current,
          new_password: password,
          confirm_password: confirm,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const res = await result.data;
      console.log("Password Change", res);

      toast.success(res.message, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

    } 
    catch (error) 
    {
    toast.error(error.response.data.error, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <div className="login-page">
    <div className="login-box">
      <h2>Change Password</h2>
      <input
        type="text"
        placeholder="Current Password"
        onChange={(e) => setCurrrent(e.target.value)}
      />{" "}
      <br></br>
      <input
        type="text"
        placeholder="New Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br></br>
      <input
        type="text"
        placeholder="Confirm Password"
        onChange={(e) => setConfirm(e.target.value)}
      />
      <br></br>
      <button onClick={Changedata}>Change Password</button>
     
    </div>
  </div>

  );
};

export default ChangePass;
