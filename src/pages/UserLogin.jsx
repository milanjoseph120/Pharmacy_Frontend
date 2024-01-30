import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import gif from '../pharmacy_images/output-onlinegiftools.gif'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { userLoginAPI } from '../Services/allAPI'
import { useNavigate } from 'react-router-dom'



function UserLogin() {
  const [userData , setUserData] =useState({
    adminname:"",
    email:"",
    password:""
  })

  const navigate = useNavigate()

  // const handleUserLogin = async(e)=>{
  //   e.preventDefault()
  //   const {email , password} =userData
  //   if(!email || !password){
  //   alert('please fill the form completely')
  //   }
  //   else{
  //   const result =  await userLoginAPI(userData)
  //   if(result.status===200){
  //     alert("Login Successfull")

  //     //  sessionStorage.setItem("existingUser",result.data.existingUser)
  //     sessionStorage.setItem("token",result.data.token)

  //     setUserData({
  //       adminname:"",
  //   email:"",
  //   password:""
  //     })
  //     navigate('/labtest')
  //   }
  //   else{
  //    alert(result.response.data)
  //   }
  //   }
  // }

  const handleUserLogin =async(e)=>{
    e.preventDefault()

    const {email , password} = userData
    if(!email || !password){
      alert('please fill the form completely')
    }
    else{
      // api call
      const result = await userLoginAPI(userData)
      console.log(result);

      if(result.status===200){
        alert("Login Successfull")
        // setIsAuthToken(true)

       //  storing data
       sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
       sessionStorage.setItem("token",result.data.token)

       setUserData({
          
         email:"",
         password:""
        })
            // setTimeout(()=>{
             
            // },2000)
            navigate('/medicine')
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
             <Form.Control type="text" placeholder="Enter Email" required  value={userData.email} onChange={(e)=>setUserData({...userData,email:e.target.value})}    />
             </Form.Group>
             <Form.Group className='mb-3 w-75' controlId="validationCustom04">
             <Form.Control type="password" placeholder="Password" required value={userData.password} onChange={(e)=>setUserData({...userData,password:e.target.value})}  />
             </Form.Group>
             </Form>
 
             
                
                 <div>
                 <button onClick={handleUserLogin} className='btn btn-success rounded' type="submit">Log in</button>
                 <p className='fw-bolder text-white'>New user. click here to <Link to={'/userregister'} style={{color:"blue"}}>Register</Link></p>
             </div>
             
             </Col>
         </Row>
     
    </div>
    
     </div>
    </div>
    
  )
}

export default UserLogin