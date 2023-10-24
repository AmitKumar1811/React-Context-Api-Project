import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "./CartContext";
import Logout from "./Authe/Logout";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import '../App.css'
const Compo = () => {
  const { CartItemNum } = useContext(CartContext);
  const {setSearchdata, username,setUsername } = useContext(CartContext);
  const [searchvalue,setSearchvalue]=useState(false);
  const location = useLocation();

  const searchHandler = (e) => {
    setSearchdata(e.target.value);
  };

  if (localStorage.getItem("token") !== null) {
    setUsername(localStorage.getItem("Name"));
  }

  return (
    <div>
    {/* style={searchvalue ? {width: "112px"} : {width: "56px"}} */}
      <Navbar bg="dark" variant="dark" expand="lg" >
        <Container >    
          <Navbar.Brand>
          
              <i className="bi bi-alexa"></i>
           
          </Navbar.Brand>

          {location.pathname === "/" && <Link
          className="searchbarIcon" 
          onClick=
          {()=>setSearchvalue(!searchvalue)}>
          <i class="bi bi-search"></i>
          </Link>}
          
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto" id="header-data">
              <Link to="/">Home</Link>
              <Link to="/History">History</Link>
              <Link to="/Compo2">About</Link>
              <Link to="/Compo3">Service</Link>
              <div className="searchbar">
              {location.pathname === "/" && (
              <input
                  className="form-control me-2 "
                  type="search"
                  onChange={searchHandler}
                  placeholder="Search Any Product"
                  aria-label="Search"
              />
              
              )}
              </div>
            </Nav>
            <Nav>
             
              <Link
                className="justify-content-end user"
                to={localStorage.getItem("token") !== null ? "/UserPage" : "/Login"}
              >
                <i className="bi bi-person-fill"></i>
                {username}
              </Link>
              <div className="Logout_button">
              {localStorage.getItem("token") !== null && <Logout />}
              </div>

              <Link className="justify-content-end cart" to="/Cart">
                <i className="bi bi-cart-fill"></i>
                {CartItemNum} Cart
              </Link>
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
     {searchvalue &&
      <Navbar bg="dark" variant="dark" className="searchbarafter">
      <Container>
      <input
                  className="form-control me-2 "
                  type="search"
                  onChange={searchHandler}
                  placeholder="Search Any Product"
                  aria-label="Search"
              />
      </Container>
    </Navbar>
     }
    </div>
  );
};

export default Compo;
