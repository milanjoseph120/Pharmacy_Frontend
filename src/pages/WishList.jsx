import React from 'react'
import Card from 'react-bootstrap/Card';
import { BASE_URL } from '../Services/baseurl';
import { useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import cart from '../pharmacy_images/cart gif.gif'




function WishList({itemss}) {
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  console.log(wishlistArray);
  return (
  <div>
     <Header/>
    <Row className='ms-5 me-5' >
      {wishlistArray?.length>0?
      wishlistArray.map((itemss)=>( <Col style={{marginTop:"150px"}} className='mb-5' sm={12} md={6} lg={4} xl={3}>
      <Card style={{ width: '18rem', height:"100%" }} className='ms-3 btn shadow'  >
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
      </Col>))
       :<div style={{height:"100vh"}} className='d-flex justify-content-center align-items-center flex-column'>
        <img height={"300px"} src={cart} alt="no image" />
        <h4 className='text-danger fw-bolder'>Your Wishlist Is Empty</h4>
        <Link className='btn btn-success rounded mt-2' to={'/medicine'}>Back To Purchase</Link>
       </div>
      }
    </Row>
  </div>
  )
}

export default WishList