import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ChangeProfile = () => 
{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate=useNavigate();

    const Changedata = async () => {
      try {
        const result = await axios.post(
          "https://shark.univisionz.in/aal/public/api/update-profile",
          {
            name: name,
            email: email,
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
        navigate('/');
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
        <h2>User Details</h2>
        <input
          type="text"
         
          placeholder="Change Name"
        onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="New Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button onClick={Changedata}>Change Profile</button>
       
      </div>
    </div>
  )
}

export default ChangeProfile


