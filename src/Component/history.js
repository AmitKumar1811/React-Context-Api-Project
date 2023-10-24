import React, { useContext} from 'react';
import { CartContext } from './CartContext';
import { Link} from 'react-router-dom';

const Checkout = () => 
{

const {finalCart}=useContext(CartContext);

  return (
    <div className='Cart'>
      <h1>Order History</h1>
      <h1 >{finalCart.price>=1 ? "Confirm" : <Link to={'/'}>Shop Now !</Link> }</h1>
      <div className='CartItem'>
     <div className='CartItemContent'>
      {JSON.parse(localStorage.getItem('History'))?.map(
      (item)=>
      {return <>
      <span>Name: {item.name}</span><span>Address:{item.address}</span>
      <span>Mail Address: {item.mail}</span>
      <span>City/Town: {item.city} </span>
      <span>Pincode: {item.pincode}</span>
      <p></p>
      <p><i class="bi bi-geo-alt-fill"></i>Delivered at Tomorrow</p>
      <h6>Total Item:{item.item}</h6>
      <h6>Order Amount:{item.Price}</h6>
      <hr></hr>
      </>}
      )}

      
      </div>
      </div>
    </div>
  );
};

export default Checkout;
