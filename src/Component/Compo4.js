import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Compo4 = () => 
{
const toaster = () =>{
if(10>50)
{
  toast("Wow so easy!")
}
else
{
alert("false")
}
};
  return (
    <div>
    <h1>Compo4 Here </h1> 
    <button onClick={toaster}>Click me !</button> 
    <ToastContainer/>
    </div>
  )
}

export default Compo4
