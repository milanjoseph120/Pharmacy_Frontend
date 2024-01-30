import React from 'react'
import Header from '../components/Header';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import cart from '../pharmacy_images/cart gif.gif'
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../Services/baseurl';
import { emptyCart, removeFromcart } from '../Redux/Slices/cartSlice';
import checkOut from '../pharmacy_images/checkOut.gif'
import { useState } from 'react';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';







function Cart({itemss}) {
   const cartArray = useSelector((state)=>state.cartReducer)
   console.log(cartArray);

   const dispatch = useDispatch()
   const [total ,setTotal] = useState(0)
   const navigate =  useNavigate()
   const getTotal = ()=>{
    if(cartArray.length>0){
      setTotal(cartArray?.map(itemss=>itemss?.price).reduce((p1,p2)=>p1+p2))
    }
    else{
      setTotal(0)
    }
   }

   const checkout = ()=>{
    dispatch(emptyCart())
    toast.success("Thank You....Your Order is Successfully Placed")
    // navigate('/medicine')
   }

   useEffect(()=>{
    getTotal()
   },[cartArray])
  return (
    // <div style={{marginTop:"150px"}}  className=' d-flex justify-content-center align-items-center flex-column'>
    //    <Header/>

    //   <div className='row w-100'>
    // {cartArray?.length>0?
    
    //  <div className='col-5 m-5 d-flex justify-content-center align-items-center flex-column '>
    //  <table className='table border shadow'>
    //     <thead>
    //       <tr>
    //         <th>#</th>
    //         <th>Product</th>
    //         <th>Image</th>
    //         <th>Price</th>
    //         <th>Action</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {cartArray.map((itemss,index)=>( <tr>
    //         <td>{index+1}</td>
    //         <td>{itemss.name}</td>
    //         <td><img style={{height:"100px" , width:"100px"}}  src={itemss?`${BASE_URL}/uploads/${itemss.image}`:"https://himalayawellness.in/cdn/shop/products/kofflet-syrup-100ml.jpg?v=1622100457"} alt="no-image" /></td>
    //         <td>{itemss.price}</td>
    //         <td><Button onClick={()=>dispatch(removeFromcart(itemss._id))}><i class="fa-solid fa-trash"></i></Button></td>
    //       </tr>))
    //        }
    //     </tbody>
    //    </table>
    //  </div>:
    //  <div style={{height:"50vh"}} className='d-flex justify-content-center align-items-center flex-column mt-5'>
    //  <img height={"300px"} src={cart} alt="no image" />
    //  <h4 className='text-danger fw-bolder'>Your Wishlist Is Empty</h4>
    //  <Link className='btn btn-success rounded mt-2' to={'/medicine'}>Back To Purchase</Link>
    // </div>

    //  }
    //  <div className="col-lg-6 mt-4 ms-3">
    //  <Card style={{ width: '30rem' }}>
    //   <Card.Img variant="top" src={checkOut} />
    //   <Card.Body>
    //   {/* <Card.Title className='text-danger'>Cart Summary</Card.Title> */}
    //   <h2  className='text-danger'>Cart Summary</h2>
    //     {/*
    //     <Card.Text>
    //       Some quick example text to build on the card title and make up the
    //       bulk of the card's content.
    //     </Card.Text> */}
    //     <h4>Total Number Of Products:<span className='text-primary fw-bolder fs-2 ms-2'>{cartArray.length}</span></h4>
    //     <h4>Total Price💸:<span className='text-primary fw-bolder fs-2 ms-2'>{total}</span></h4>
    //     <Button onClick={checkout} variant="primary">Check out</Button>
    //   </Card.Body>
    // </Card>
    //  </div>
    //   </div>
    //   <ToastContainer autoClose={2000} theme='colored' position='top-center' />
    // </div>

    <div className='container mt-5'>
    <Header />

    <div className='row'>
      <div className='col-lg-5 d-flex justify-content-center align-items-center flex-column'>
        {cartArray?.length > 0 ? (
          <div className='col-12 m-3 d-flex justify-content-center align-items-center flex-column'>
            <table className='table border shadow'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartArray.map((itemss, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{itemss.name}</td>
                    <td>
                      <img
                        style={{ height: '100px', width: '100px' }}
                        src={itemss ? `${BASE_URL}/uploads/${itemss.image}` : 'https://himalayawellness.in/cdn/shop/products/kofflet-syrup-100ml.jpg?v=1622100457'}
                        alt='no-image'
                      />
                    </td>
                    <td>{itemss.price}</td>
                    <td>
                      <Button onClick={() => dispatch(removeFromcart(itemss._id))}>
                        <i className='fa-solid fa-trash'></i>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div style={{ height: '50vh' }} className='d-flex justify-content-center align-items-center flex-column mt-5'>
            <img height={'300px'} src={cart} alt='no image' />
            <h4 className='text-danger fw-bolder'>Your Wishlist Is Empty</h4>
            <Link className='btn btn-success rounded mt-2' to={'/medicine'}>
              Back To Purchase
            </Link>
          </div>
        )}
      </div>

      <div className='col-lg-6 mt-4 ms-3'>
        <Card style={{ width: '30rem' }}>
          <Card.Img variant='top' src={checkOut} />
          <Card.Body>
            <h2 className='text-danger'>Cart Summary</h2>
            <h4>
              Total Number Of Products:
              <span className='text-primary fw-bolder fs-2 ms-2'>{cartArray.length}</span>
            </h4>
            <h4>
              Total Price💸:
              <span className='text-primary fw-bolder fs-2 ms-2'>{total}</span>
            </h4>
            <Button onClick={checkout} variant='primary'>
              Check out
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
    <ToastContainer autoClose={2000} theme='colored' position='top-center' />
  </div>

    
  )
}

export default Cart