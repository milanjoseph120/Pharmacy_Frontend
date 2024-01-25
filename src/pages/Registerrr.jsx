import React, { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import image from '../pharmacy_images/3956350.jpg'
import { registerAPI } from '../Services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

function Registerrr() {
  const [adminData , setAdminData] =useState({
    adminname:"",
    email:"",
    password:""
  })
  const navigate = useNavigate()
  console.log(adminData);

  // function to register
  const handleRegister = async(e)=>{
    e.preventDefault()

    const {adminname,email,password} = adminData

    if(!adminname || !email || !password){
      toast.info("please fill the form completely")
    }
    else{
     const result = await registerAPI(adminData)
     console.log(result);
     if(result.status===200){
      alert(`${result.data.adminname} is successfully registerd`)
      setAdminData({
        adminname:"",
        email:"",
        password:""
      })
    navigate('/login')
     }
     else{
      toast.error(result.response.data)
     }
    }
  }
  return (
    <div>

<div style={{width:"100%" , height:"100vh"}} className='d-flex justify-content-center align-items-center bg-info'>
    
    <div className='container w-75'>
   
    <Row className='align-items-center '>
             <Col sm={12} md={6} className='d-flex justify-content-center align-items-center '>
            
            <img className='border rounded' width={"400px"} src={image} alt="" />
            
             </Col>
 
             <Col sm={12} md={6} className=''>
             <h1 className='text-light'><p><i class="fa-solid fa-prescription-bottle-medical me-3"></i>PharmEasy</p></h1>
             <h5 className='text-light ms-5 mt-4'>
                <p>Sign Up To Your Account</p>
             </h5>
             <Form>
             
             <Form.Group className='mb-3 w-75' controlId="validationCustom04">
             <Form.Control type="text" placeholder="Adminname" required value={adminData.adminname} onChange={(e)=>setAdminData({...adminData,adminname:e.target.value})}/>
             </Form.Group>
             <Form.Group className='mb-3 w-75' controlId="validationCustom04">
             <Form.Control type="text" placeholder="Enter Email" required value={adminData.email} onChange={(e)=>setAdminData({...adminData,email:e.target.value})}  />
             </Form.Group>
             <Form.Group className='mb-3 w-75' controlId="validationCustom04">
             <Form.Control type="text" placeholder="Password" required value={adminData.password} onChange={(e)=>setAdminData({...adminData,password:e.target.value})}/>
             </Form.Group>
             </Form>
 
             
                 <div>
                     <button onClick={handleRegister}  className='btn btn-success rounded'>Register</button>
                     <p  className='fw-bolder text-white'>Allready a user. click here to <Link to={'/login'} style={{color:"blue"}}>Login</Link></p>
                 </div>
             </Col>
         </Row>
     
    </div>
    
     </div>
     <ToastContainer autoClose={2000} theme='colored' position='top-center' />
    </div>
  )
}

export default Registerrr