import React from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { isAuthTokenContext } from '../Context/ContextShare';
import { useContext } from 'react';
import { useSelector } from 'react-redux';

function Header({labtest}) {
  // redux part
  const wishlist = useSelector((state)=>state.wishlistReducer)  /* represent store */
console.log(wishlist);

const cart = useSelector((state)=>state.cartReducer)
console.log(cart);


  const {isAuthToken , setIsAuthToken} = useContext(isAuthTokenContext)
  const navigate = useNavigate()
  const handleLogout = ()=>{
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("existingAdmin")
    setIsAuthToken(false)
    navigate('/')
  }
  return (
    <Navbar expand="lg" className="bg-info fixed-top">
    <Container>
      <Navbar.Brand><Link to={'/'} style={{textDecoration:"none",color:"white"}}><i class="fa-solid fa-prescription-bottle-medical me-3"></i>PharmEasy</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto ">
          <Nav.Link className='btn border rounded' ><Link to={'/wishlist'} style={{textDecoration:"none",color:"white"}}><i class="fa-solid fa-heart fa-bounce me-3" style={{color:"red"}}></i>WishList <Badge bg="secondary" className='rounded ms-2'>{wishlist.length}</Badge></Link></Nav.Link>
          <Nav.Link className='btn border rounded ms-4'><Link to={'/cart'} style={{textDecoration:"none",color:"white"}}><i class="fa-solid fa-cart-shopping fa-bounce me-3"></i>Cart <Badge bg="secondary" className='rounded ms-2 '>{cart.length}</Badge></Link></Nav.Link>  
        </Nav>
      </Navbar.Collapse>
     {
      labtest &&
      <button onClick={handleLogout} className='btn btn-warning ms-3'><i class="fa-solid fa-power-off me-2"></i>Logout</button>
     }
    </Container>
  </Navbar>
  )
}

export default Header