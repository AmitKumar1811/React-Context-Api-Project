import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BoxNavbar from "./BoxNavbar";
import { CartContext } from "../CartContext";
import './Address.css';

const Address = () => {
  const { setBilladdress, finalCart, billaddress } = useContext(CartContext);

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [phone, setPhone] = useState("");

  const [nameError, setNameError] = useState("");
  const [mailError, setMailError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [cityError, setCityError] = useState("");
  const [pincodeError, setPincodeError] = useState("");
  const [phoneError, setPhoneError] = useState("");
 
  const [tigger,setTigger]=useState(false);
  const navigate = useNavigate();

  let isValid = true;

  const AddressHandler = (e) => {
    e.preventDefault();
    AddressHandlerform();
    setTigger(true);
    if (isValid) {
      setBilladdress([
        ...billaddress,
        {
          name: name,
          mail: mail,
          address: address,
          city: city,
          phone: phone,
          pincode: pincode,
          item: finalCart.item,
          Price: finalCart.price,
        },
      ]);
     
      navigate("/Payment");
    } 
  };
  
const AddressHandlerform=()=>
{
  if (name === "") {
    setNameError("Please enter your name");
    isValid = false;
  } 
  else {
    setNameError("");
    isValid = true;
  }

  if (mail === "") {
    setMailError("Please enter your email");
    isValid = false;
  } 
  else if (!/\S+@\S+\.\S+/.test(mail)) {
    setMailError("Please enter a valid email address");
    isValid = false;
  } 
  else {
    setMailError("");
    isValid = true;
  }

  if (address === "") {
    setAddressError("Please enter your address");
    isValid = false;
  } else {
    setAddressError("");
    isValid = true;
  }

  if (city === "") {
    setCityError("Please enter your city");
    isValid = false;
  } else {
    setCityError("");
    isValid = true;
  }

  if (pincode === "") {
    setPincodeError("Please enter your pincode");
    isValid = false;
  } else {
    setPincodeError("");
    isValid = true;
  }

  if (phone === "") {
    setPhoneError("Please enter your phone number");
    isValid = false;
  } else {
    setPhoneError("");
    isValid = true;
  }

}

  useEffect(()=>
  {
  if(tigger)
  {
  AddressHandlerform();
  }
  },[name,mail,address,phone,pincode,city])
  
  return (
    <div className="Address_Person">
      <div className="Address_Person_box">
        <p>
          <BoxNavbar />
        </p>
        <h2>Shipping Address</h2>
        <input
          type="text"
          placeholder="User Full Name"
          aria-label="Fullname"
          aria-describedby="basic-addon1"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        {nameError && <span className="error">{nameError}</span>}
        <br />

        <input
          type="email"
          placeholder="Email Address"
          aria-label="Email"
          onChange={(e) => setMail(e.target.value)}
          value={mail}
          required
        />
        {mailError && <span className="error">{mailError}</span>}
        <br />

        <input
          type="text"
          placeholder="Address"
          aria-label="Address"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          required
        />
        {addressError && <span className="error">{addressError}</span>}
        <br />

        <input
          type="text"
          placeholder="Town/City"
          aria-label="City"
          onChange={(e) => setCity(e.target.value)}
          value={city}
          required
        />
        {cityError && <span className="error">{cityError}</span>}
        <br />

        <input
          type="number"
          placeholder="Pincode"
          onChange={(e) => setPincode(e.target.value)}
          value={pincode}
          required
        />
        {pincodeError && <span className="error">{pincodeError}</span>}
        <br />

        <input
          type="number"
          placeholder="Phone Number"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          required
        />
        {phoneError && <span className="error">{phoneError}</span>}
        <br />
        <button onClick={AddressHandler}>Payment Page</button>
      </div>
    </div>
  );
};

export default Address;
