import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BoxNavbar from "./BoxNavbar";
import "./Name.css";
import { toast } from "react-toastify";
const Name_Compo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const navigate = useNavigate();

  const detailshandler = () => {
    let isValid = true;

    if (name === "") {
      setNameError("Please enter your name");
      isValid = false;
    } else {
      setNameError("");
    }

    if (email === "") {
      setEmailError("Please enter your email");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (phone === "") {
      setPhoneError("Please enter your phone number");
      isValid = false;
    } else {
      setPhoneError("");
    }

    if (isValid) {
      navigate("/Address");
    } else {
      toast.error("Please Fill all Details!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  
  useEffect(
  ()=>
  {
  setName(localStorage.getItem('Name')); 
  setEmail(localStorage.getItem('email')); 
  })


  return (
    <div className="Register_Person">
      <div className="Register_Person_box">
        <p>
          <BoxNavbar />
        </p>
        <Link to={"/Cart"}>Cart Page</Link>
        <h2>Person Details</h2>
        <br></br>
        <div className="InputFielddata">
          <input
            type="text"
            placeholder="User Full Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
          <p>{nameError && <span className="error">{nameError}</span>}</p>
          <input
            type="text"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <p>{emailError && <span className="error">{emailError}</span>}</p>
          <input
            type="text"
            placeholder="Phone Number"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            required
          />
          <p>{phoneError && <span className="error">{phoneError}</span>}</p>
        </div>

        <button onClick={detailshandler}>Submit</button>
      </div>
    </div>
  );
};

export default Name_Compo;
