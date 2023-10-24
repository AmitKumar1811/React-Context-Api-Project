import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from "axios";
import { CartContext } from "../CartContext";
import './Login.css';
const Login = () => {
  const { setUsername } = useContext(CartContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const fetchdata = async () => {
    if (email === "" || password === "") {
      toast.error("Please Fill All Data");
    } else {
      try {
        const result = await axios.post(
          "https://shark.univisionz.in/aal/public/api/authentication/login",
          {
            email: email,
            password: password,
          }
        );
        const res = result.data;

        localStorage.setItem("token", res.data.token);
        localStorage.setItem('email',email);
        
        if (res.status === true) {
          toast.success('Successfully Logged In!', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

          const Login_info= await fetch('https://shark.univisionz.in/aal/public/api/user-info',{
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
          });
          const res1=await Login_info.json();
          setUsername(res1.data.name);
          localStorage.setItem('Name',res1.data.name);
          navigate("/");
        } else {
          toast.error("Login Failed");
        }
      } catch (error) {
       console.log(error);
        // toast.error(error.response.data.error.email[0], {
        //   position: "top-right",
        //   autoClose: 2000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "light",
        //   });
        toast.error(error.response.data.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          }); 
        
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Login User</h2>
        <input
          type="text"
         
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button onClick={fetchdata}>Submit</button>
        <div className="register-link">
        <p>
          Don't have an account? <Link to={'/Register'}>Register</Link>
        </p>
        </div>
       
      </div>
    </div>
  );
};

export default Login;
