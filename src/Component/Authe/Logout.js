import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import './Logout.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Logout = () => 
{
  const navigate=useNavigate();
  const { setUsername,setCartItemNum,setFinalCart , setCartItems ,setBilladdress} = useContext(CartContext);
  const Logout = async () => 
  {
  
    try {
      const result = await axios.post(
        "https://shark.univisionz.in/aal/public/api/logout",
        {},
        {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
     const res=result.data;

     console.log("Res in Logout ",res);
     console.log("Successfully Logout", res.status, res);
     localStorage.removeItem("token");
     localStorage.removeItem('Name');
     localStorage.removeItem('History');
     localStorage.removeItem('email');
     setUsername("Sign-In");
     toast.success('Successfully Logout!', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
      setCartItemNum(0);
      setCartItems([]);
      setFinalCart([]);
      setBilladdress([]);
      navigate('/');
      
    } catch (error) 
    {
    console.error("error in logout",error);
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
  };

 return <>
 <button class="myButton"Logout onClick={Logout}>Logout</button>
 </>  
  };

export default Logout;
