import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../Services/baseurl';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addToWishList } from '../Redux/Slices/wishlistSlice';
import { addtocart } from '../Redux/Slices/cartSlice';


function MedicineCard ({itemss}) {

const dispatch = useDispatch()

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleBook = ()=>{
    toast.success("Successfully Booked")
  }
  return (
   <>
     <Card style={{ width: '18rem', height:"100%" }} className='ms-3 btn shadow'  onClick={handleShow}>
      <Card.Img variant="top" src={itemss?`${BASE_URL}/uploads/${itemss.image}`:"https://himalayawellness.in/cdn/shop/products/kofflet-syrup-100ml.jpg?v=1622100457"} style={{height:"200px"}} />
      <Card.Body>
        <Card.Title>{itemss.name}</Card.Title>
        {/* <Card.Text>
         <p>price:</p>
        </Card.Text> */}
       <div className='d-flex align-items-center justify-content-between'>
       {/* <Button variant="outline-danger btn rounded"><i class="fa-solid fa-heart " ></i></Button>
        <Button variant="outline-success btn rounded"><i class="fa-solid fa-cart-plus " ></i></Button> */}
       </div>
      </Card.Body>
    </Card>
     

     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{itemss.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Row>
          <Col md={6}>
          <img style={{height:"100%", width:"100%"}}src={itemss?`${BASE_URL}/uploads/${itemss.image}`:"https://himalayawellness.in/cdn/shop/products/kofflet-syrup-100ml.jpg?v=1622100457"} alt="no-image" />
          </Col>

          <Col md={6}>
            <h4>Details:</h4>
          <p>{itemss.details}</p>
          <h4>Price 💸:</h4>
          <p>{itemss.price}</p>
          </Col>
         </Row>
         <div className='d-flex align-items-center justify-content-center mt-3 '>
         {/* <Link to={'/wishlist'}></Link>  */}
         <Button onClick={()=>dispatch(addToWishList(itemss))}  variant="outline-danger btn rounded"><i class="fa-solid fa-heart " ></i></Button>
        {/* <Link  to={'/cart'} ></Link>  */}
        <Button onClick={()=>dispatch(addtocart(itemss))} className='ms-3' variant="outline-success btn rounded"><i class="fa-solid fa-cart-plus " ></i></Button>
       {/* <Button className='ms-3' variant="outline-danger btn rounded" onClick={handleBook}>Book Now</Button> */}
         </div>
        </Modal.Body>
       
      </Modal>
      <ToastContainer autoClose={2000} theme='colored' position='top-center' />
   </>
  )
}

export default MedicineCard


