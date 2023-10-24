import React from "react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../CartContext";
import { toast } from 'react-toastify';
import './Register.css';
const Register = () => {
  const {setUsername } = useContext(CartContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const fetchdata = async () => {
    if (name === "" || email === "" || password === "") {
      toast.warn('Please Fill all Data !', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } else {
      try {
        const result = await axios.post(
          "https://shark.univisionz.in/aal/public/api/authentication/register",
          {
            name: name,
            email: email,
            password: password,
          }
        );
        const res = result.data;
        console.log(`data in login: ${res.status}`);

        if (res.status === true) {
          toast("Successfully Register User");
          if (name !== "") {
            setUsername(name);
          } else {
            setUsername("Unknown");
          }
          navigate("/");
        } else {
          toast.error('Failure in Registration !', {
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
      } catch (error) {
        console.error("catch error is ",error.message,error.response.data.error.email[0]);
        toast.error(error.response.data.error.email[0], {
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

  return <div className="Register_page">
   
   <div className="Register_box">
   <h2>Register User</h2>
          <input
            type="text"
           
            placeholder="User Full Name"
            onChange={(e) => setName(e.target.value)}
            aria-label="name"
            aria-describedby="basic-addon1"
            required
          />
          <br></br>
          <input
            type="text"
           
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email"
            aria-describedby="basic-addon1"
            required
          />
          <br></br>
          <input
            type="password"
           
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            aria-label="password"
            aria-describedby="basic-addon1"
            required
          />
           <br></br>
           <button  onClick={fetchdata}>Register</button>
          <h6>Already Account <Link to={'/Login'}>Login</Link> </h6>  

   </div>
   </div>
};

export default Register;
