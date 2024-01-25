import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { Link, json, useNavigate } from 'react-router-dom'
import gif from '../pharmacy_images/pharmacy gif.gif'
import { useState } from 'react'
import { loginAPI } from '../Services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react'
import { isAuthTokenContext } from '../Context/ContextShare'



function Loginnn() {
  const {isAuthToken , setIsAuthToken} = useContext(isAuthTokenContext)
  // function to login
  const [adminData , setAdminData] =useState({
    adminname:"",
    email:"",
    password:""
  })
  const navigate = useNavigate()
  const handleLogin =async(e)=>{
    e.preventDefault()

    const {email , password} = adminData
    if(!email || !password){
      toast.info('please fill the form completely')
    }
    else{
      // api call
      const result = await loginAPI(adminData)
      console.log(result);

      if(result.status===200){
        toast.success("Login Successfull")
        setIsAuthToken(true)

       //  storing data
       sessionStorage.setItem("existingAdmin",JSON.stringify(result.data.existingAdmin))
       sessionStorage.setItem("token",result.data.token)

        setAdminData({
          
         email:"",
         password:""
        })
            setTimeout(()=>{
              navigate('/labtest')
            },2000)
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
             <Col sm={12} md={6} className='d-flex justify-content-center align-items-center'>
            
            <img width={"400px"} src={gif} alt="" />
             </Col>
 
             <Col sm={12} md={6} className=''>
             <h1 className='text-light'><p><i class="fa-solid fa-prescription-bottle-medical me-3"></i>PharmEasy</p></h1>
             <h5 className='text-light ms-5 mt-4'>
                <p className='text-light ms- mt-4'>Sign In To Your Account</p>
             </h5>
             <Form>
             
           
             <Form.Group className='mb-3 w-75' controlId="validationCustom04">
             <Form.Control type="text" placeholder="Enter Email" required value={adminData.email} onChange={(e)=>setAdminData({...adminData,email:e.target.value})}   />
             </Form.Group>
             <Form.Group className='mb-3 w-75' controlId="validationCustom04">
             <Form.Control type="text" placeholder="Password" required value={adminData.password} onChange={(e)=>setAdminData({...adminData,password:e.target.value})} />
             </Form.Group>
             </Form>
 
             
                
                 <div>
                 <button onClick={handleLogin} className='btn btn-success rounded' type="submit">Log in</button>
                 {/* <p className='fw-bolder text-white'>New user. click here to <Link to={'/register'} style={{color:"blue"}}>Register</Link></p> */}
             </div>
             
             </Col>
         </Row>
     
    </div>
    
     </div>
     <ToastContainer autoClose={2000} theme='colored' position='top-center' />
    </div>
  )
}

export default Loginnn