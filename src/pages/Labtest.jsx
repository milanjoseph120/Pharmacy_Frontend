import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Row, Col} from 'react-bootstrap'
import MyMedicine from '../components/MyMedicine'
import { useState } from 'react'

function Labtest() {

  const [adminName , setAdminName] = useState("")

  useEffect(()=>{
    setAdminName(JSON.parse(sessionStorage.getItem("existingAdmin")).adminname)
  },[])
  console.log(adminName);
  return (
    // <>
    //    <Header labtest />
    //    <h2 className='mt-5 ms-3 text-center' style={{marginTop:"50%"}}>Welcome Admin:<span className='text-warning mt-5'>{adminName}</span></h2>

    //    <Row className='container-fluid mt-5 d-flex justify-content-center '>
    //    <Col md={8}>
    //    <MyMedicine/>
    //    </Col>
    //    </Row>
    // </>

    <>
  <Header labtest />
  <h2 className=' ms-3 text-center' style={{ marginTop: "5%" }}>
    Welcome Admin:<span className='text-warning mt-5'>{adminName}</span>
  </h2>

  <div className='container-fluid mt-5'>
    <div className='row justify-content-center'>
      <div className='col-md-8'>
        <MyMedicine />
      </div>
    </div>
  </div>
</>
  )
}

export default Labtest