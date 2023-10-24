import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Compo from './Component/Homepage';
import Navbar from './Component/Navbar';
// import Compo1 from './Component/Compo1';
// import Compo3 from './Component/Compo3';
import Compo2 from './Component/Compo2';
import Cart from './Component/Cart';
import Checkout from './Component/history';
import Register from './Component/Authe/Register';
import Login from './Component/Authe/Login_Modal';
import Address from './Component/CheckoutBox/Address';
import Name from './Component/CheckoutBox/Name_Compo';
import Payment from './Component/CheckoutBox/Payment';
import SinglePage from './Component/Single_Product/SinglePage'
import Compo4 from './Component/Compo4';
import UserPage from './Component/Authe/User_Profile';
import ChangePass from './Component/Authe/ChangePass';
import ChangeProfile from './Component/Authe/ChangeProfile';
import SubscribeModal from './Component/Modal/SubscribeModal';


const App = () => 
{
  return (

  <BrowserRouter>
  <Navbar/>
  <SubscribeModal/>
  <Routes>
  <Route path='/' element={<Compo/>} />
  <Route path='/Compo2' element={<Compo2/>} />
  <Route path='/Compo3' element={<Compo4/>} />
  <Route path='/Cart' element={<Cart/>}/>
  <Route path='/History' element={<Checkout/>}/>
  <Route path='/Register' element={<Register/>} />
  <Route path='/Login' element={<Login/>} />
  <Route path='/Address' element={<Address/>}/>
  <Route path='/Name_details' element={<Name/>}/>
  <Route path='/Payment' element={<Payment/>}/>
  <Route path='/SinglePage' element={<SinglePage/>} />
  <Route path='/UserPage' element={<UserPage/>} />
  <Route path='ChangePass' element={<ChangePass/>} />
  <Route path='/ChangeProfile' element={<ChangeProfile/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App
