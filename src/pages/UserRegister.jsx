import React, { useState } from 'react'
import image from '../pharmacy_images/registartion gif1.gif'
import { Col, Form, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { userRegisterAPI } from '../Services/allAPI'


function UserRegister() {
    const [userData , setUserData] = useState({
        username:"",
        email:"",
        password:""
    })
    console.log(userData);
    const navigate = useNavigate()

    const handleUserRegister = async(e)=>{
        e.preventDefault()

        const {username,email,password} = userData
        if(!username || !email || !password){
            alert("please fill the form completely")
          }  else{
            const result = await userRegisterAPI(userData)
            console.log(result);
            if(result.status===200){
             alert(`${result.data.username} is successfully registerd`)
             setUserData({
                username:"",
               email:"",
               password:""
             })
           navigate('/userlogin')
            }
            else{
             alert(result.response.data)
            }
           }
    }
  return (
    <div>
        <div style={{width:"100%" , height:"100vh"}} className='d-flex justify-content-center align-items-center bg-black'>
    
    <div className='container w-75'>
   
    <Row className='align-items-center '>
             <Col sm={12} md={6} className='d-flex justify-content-center align-items-center '>
            
            <img className=' rounded' width={"400px"} src={image} alt="" />
            
             </Col>
 
             <Col sm={12} md={6} className=''>
             <h1 className='text-light'><p><i class="fa-solid fa-prescription-bottle-medical me-3"></i>PharmEasy</p></h1>
             <h5 className='text-light ms-5 mt-4'>
                <p>Sign Up To Your Account</p>
             </h5>
             <Form>
             
             <Form.Group className='mb-3 w-75' controlId="validationCustom04">
             <Form.Control type="text" placeholder="Username" required value={userData.username} onChange={(e)=>setUserData({...userData,username:e.target.value})} />
             </Form.Group>
             <Form.Group className='mb-3 w-75' controlId="validationCustom04">
             <Form.Control type="text" placeholder="Enter Email" required value={userData.email} onChange={(e)=>setUserData({...userData,email:e.target.value})} />
             </Form.Group>
             <Form.Group className='mb-3 w-75' controlId="validationCustom04">
             <Form.Control type="text" placeholder="Password" required  value={userData.password} onChange={(e)=>setUserData({...userData,password:e.target.value})} />
             </Form.Group>
             </Form>
 
             
                 <div>
                     <button onClick={handleUserRegister}  className='btn btn-success rounded'>Register</button>
                     <p  className='fw-bolder text-white'>Allready a user. click here to <Link to={'/userlogin'} style={{color:"blue"}}>Login</Link></p>
                 </div>
             </Col>
         </Row>
     
    </div>
    
     </div>
    </div>

  )
}

export default UserRegister