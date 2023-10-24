import React from 'react'
import { NavLink } from 'react-router-dom'
import './box.css';
const BoxNavbar = () => 
{

  return ( <>

    <div className='boxnavbar'>
    <NavLink onClick={(e)=> e.preventDefault()} to={'/Name_details'}>User Details</NavLink> 
    <br></br>
    <NavLink onClick={(e)=> e.preventDefault()} to={'/Address'}>Address</NavLink>
    <br></br>
    <NavLink onClick={(e)=> e.preventDefault()} to={'/Payment'}>Payment</NavLink>
    </div>
  </>

    
  )
}

export default BoxNavbar
