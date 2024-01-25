

import React from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MedicineCard from '../components/MedicineCard';
import boy from '../pharmacy_images/doctor.png'
import review from '../pharmacy_images/medium-shot-young-people-with-reviews.jpg'
import { useEffect } from 'react';
import { allItemAPI, userItemAPI } from '../Services/allAPI';
import { useState } from 'react';

function UserMedicinedisplay() {
    const [allItems , setAllItems] = useState([])
  const [searchKey , setSearchKey] = useState("")

  // const getAllItems = async()=>{

  //   if(sessionStorage.getItem("token")){
  //     const token = sessionStorage.getItem("token")
  //     const reqHeader = {
  //       "Content-Type":"application/json",
  //       "Authorization":`Bearer ${token}`
  //     }
  //     const result = await allItemAPI(searchKey,reqHeader)
  //    console.log(result.data);
  //    if(result.status===200){
  //     setAllItems(result.data)
  //    }
  //   }
  //   }
  //   console.log(searchKey);
  //   useEffect(()=>{
  //   getAllItems()
  //   },[searchKey])

    
    // const getAllUserItems = async()=>{

    //     if(sessionStorage.getItem("token")){
    //       const token = sessionStorage.getItem("token")
    //       const reqHeader = {
    //         "Content-Type":"application/json",
    //         "Authorization":`Bearer ${token}`
    //       }
    //       const result = await userItemAPI(searchKey,reqHeader)
    //      console.log(result.data);
    //      if(result.status===200){
    //       setAllItems(result.data)
    //      }
    //     }
    //     }
    //     console.log(searchKey);
    //     useEffect(()=>{
    //       getAllUserItems()
    //     },[searchKey])
  return (
    <>
    <Header/>
    <div style={{backgroundColor:"lightblue",height:"92vh"}}>
     <div className='container-fluid rounded'>
     <Row className='align-items-center p-5'>
         
         <Col sm={12} md={6}>
           <img className='w-90' height={"70%"} width={"70%"} src={boy} alt="" />
         </Col>

         <Col sm={12} md={6}>
           <h1 style={{color:"green"}}>Why Should You <br/> Choose Us</h1>
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br/> Asperiores quis rem aliquid id voluptatibus mollitia distinctio<br/>  autem quo ut. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

           <Card style={{ width: '14rem',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <Card.Img variant="top" src={review} />
      <Card.Body >
        <Card.Title  className='fw-bold' style={{color:"red"}}>12K Satisfied Customer Reviews</Card.Title>
      </Card.Body>
    </Card>
         </Col>

        </Row>
     </div>
      </div>
    

   
   


        <div style={{marginTop:"100px" , color:"green"}} className='text-center'>
       <h1>What Are You Looking For ?</h1>
       <div className='mb-3 mt-3 d-flex justify-content-center align-items-center'>
         <div className='d-flex w-25'>
             <input value={searchKey} onChange={e=>setSearchKey(e.target.value)} type="text" placeholder='Search' className='form-control rounded' /> <i class="fa-solid fa-magnifying-glass mt-3" style={{marginLeft:"-40px" ,color:"lightgray" }}></i>
         </div>
       </div>
    </div>

    <Row className='container-fluid mt-5 ms-4'>
      
     {allItems?.length>0? 
     allItems?.map((item)=>(<Col sm={12} md={6} lg={4} className='mt-5'>
      <MedicineCard itemss= {item}  />
      </Col>))
     :<p className='fw-bold' style={{color:"red"}}>Nothing to display</p>
      }
    </Row>
    </>
  )
}

export default UserMedicinedisplay