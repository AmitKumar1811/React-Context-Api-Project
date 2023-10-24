import React, { useContext, useEffect, useState } from "react";
import BoxNavbar from "./BoxNavbar";
import { useNavigate } from "react-router-dom";
import './Payment.css';
import { toast } from 'react-toastify';
import { CartContext } from "../CartContext";

const Payment = () => {
  const { setCartItems, setCartItemNum,billaddress } = useContext(CartContext);
  const navigate = useNavigate();

  const [candidateName, setCandidateName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardCVV, setCardCVV] = useState("");

  const [candidateNameError, setCandidateNameError] = useState("");
  const [cardNumberError, setCardNumberError] = useState("");
  const [cardCVVError, setCardCVVError] = useState("");
  const [trigger,setTrigger]=useState(false)
  let isValid = false;

  const confirmHandler = () => {
    setTrigger(true);
    confirmHandlerform();
    if (isValid) {
      toast.success('Order Confirmed!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      
      setCartItems([]);
      setCartItemNum(0);
      localStorage.setItem('History',JSON.stringify(billaddress))
      navigate('/History');
    } else {
      toast.error('Please fill all details correctly!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const confirmHandlerform=()=>
  {
    if (candidateName === "") {
      setCandidateNameError("Please enter candidate's name");
      isValid = false;
    } else {
      setCandidateNameError("");
      isValid=true;
    }

    if (cardNumber === "") {
      setCardNumberError("Please enter card number");
      isValid = false;
    } else if (isNaN(cardNumber) || cardNumber.length !== 16) {
      setCardNumberError("Please enter a valid 16-digit card number");
      isValid = false;
    } else {
      setCardNumberError("");
      isValid=true;
    }

    if (cardCVV === "") {
      setCardCVVError("Please enter card CVV");
      isValid = false;
    } else if (isNaN(cardCVV) || cardCVV.length !== 3) {
      setCardCVVError("Please enter a valid 3-digit CVV");
      isValid = false;
    } else {
      setCardCVVError("");
      isValid=true;
    }

  }
  useEffect(
  ()=>
  {
  if(trigger)
  {confirmHandlerform()}
  },[cardCVV,cardNumber,candidateName]
  )
  

  return (
    <>
      <div className="Payment_page"> 
        <div className="Payment_box">
          <p><BoxNavbar /></p>
          <br />
          <input
            type="text"
            placeholder="Candidate Name"
            aria-label="Fullname"
            aria-describedby="basic-addon1"
            onChange={(e) => setCandidateName(e.target.value)}
            value={candidateName}
            required
          />
          {candidateNameError && <span className="error">{candidateNameError}</span>}
          <br />
          
          <input
            type="number"
            placeholder="Card Number"
            onChange={(e) => setCardNumber(e.target.value)}
            value={cardNumber}
            required
          />
          {cardNumberError && <span className="error">{cardNumberError}</span>}
          <br />
          
          <input
            type="number"
            placeholder="Card CVV"
            onChange={(e) => setCardCVV(e.target.value)}
            value={cardCVV}
            required
          />
          {cardCVVError && <span className="error">{cardCVVError}</span>}
          <br />
          
          <button type="button" onClick={confirmHandler}>Confirm</button>
        </div>
      </div>
    </>
  );
};

export default Payment;
