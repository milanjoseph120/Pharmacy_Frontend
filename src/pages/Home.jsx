import React from 'react'
import { Col, Row } from 'react-bootstrap'
import titleimage from '../pharmacy_images/medicine gif.gif'
import MedicineOffers from '../components/MedicineOffers'
import MedicineOffers2 from '../components/MedicineOffers2'
import MedicineOffers3 from '../components/MedicineOffers3'
import MedicineOffers4 from '../components/MedicineOffers4'
import Card from 'react-bootstrap/Card';
import medicine from '../pharmacy_images/Medicine image.jpg'
import devices from '../pharmacy_images/helath devices.jpeg'
import skincare from '../pharmacy_images/skin care.png'
import { Link } from 'react-router-dom'
import people from '../pharmacy_images/young-bearded-man-with-striped-shirt.jpg'
import people2 from '../pharmacy_images/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair.jpg'
import people3 from '../pharmacy_images/lady-with-brown-eyes-is-smiling-red-wall.jpg'


function Home() {
  return (
   <>
   <div style={{width:'100%' , height:"100vh" , backgroundColor:"orange"}}>
   <div  className='container-fluid rounded'>
   <Row className='align-items-center p-5'>
      <Col sm={12} md={6}>
        <h1 style={{fontSize:"100px" , color:"white"}}>Take It Easy <span className='text-success'>PharmEasy</span> </h1>
        <p>PharmEasy is one of India's most trusted online pharmacy & medical stores offering pharmaceutical and healthcare products.</p>
        <Link to={'/login'} className='btn btn-dark rounded'>Admin Only Login <i class="fa-solid fa-arrow-right ms-3"></i></Link>
      </Col>
      <Col sm={12} md={6}>
      <img src={titleimage} alt="no image" className='w-75' style={{marginTop:"100px"}} />
      </Col>
    </Row>
   </div>
   </div>
   <div className='offers mt-5'>
   <h1 className='text-center mt-5 fw-bold' style={{color:"green"}}>Offers</h1>
   <marquee scrollAmount={20}>
   <div className='d-flex mt-5'>
    <div className='ms-5' style={{width:"500px"}}>
     <MedicineOffers/>
    </div>
    <div  className='ms-5' style={{width:"500px"}}>
     <MedicineOffers2/>
    </div>
    <div  className='ms-5' style={{width:"500px"}}>
     <MedicineOffers3/>
    </div>
    <div  className='ms-5' style={{width:"500px"}}>
     <MedicineOffers4/>
    </div>
   </div>
   </marquee>

   {/* <div className='text-center mt-5'>
   <Link to={'/medicine'}>See More Medicines</Link>
   </div> */}
   </div>
   

   <div className='medicines mt-5'>
    <h1 className='text-center mt-5 fw-bold' style={{color:"green"}}>Shop By Categories</h1>
    <div style={{ display: 'flex', gap: '70px' }} className='ms-5 justify-content-center mt-5'>
  <Card style={{ width: '18rem',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
    <Card.Img height={"200px"}  variant="top" src={medicine} />
    <Card.Body>
      <Card.Title className='text-center fw-bold'>Medicines</Card.Title>
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
    <Card.Img height={"200px"}  variant="top" src={devices} />
    <Card.Body>
      <Card.Title className='text-center fw-bold'>HealthCare Devices</Card.Title>
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
    <Card.Img height={"200px"} variant="top" src={skincare} />
    <Card.Body>
      <Card.Title className='text-center fw-bold'>SkinCare Products</Card.Title>
    </Card.Body>
  </Card>
</div>
  
  <div className='text-center mt-5'>
   <Link to={"/userregister"} className='fw-bold'>Login To See More</Link>
  </div>
   </div>


   <div className='medicines mt-5'>
    <h1 className='text-center mt-5 fw-bold' style={{color:"green"}}>What Our Customers Have to Say</h1>
    <div style={{ display: 'flex', gap: '70px' }} className='ms-5 justify-content-center mt-5'>
  <Card  style={{ width: '18rem' ,boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
    <Card.Img height={"200px"}  variant="top" src={people} />
    <Card.Body>
      <Card.Title className='text-center fw-bold'>George</Card.Title>
    </Card.Body>
    <Card.Text style={{textAlign:"left"}}>
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, at ullam facere repellendus, placeat, vitae omnis nam nisi tempora hic velit a rem ipsum repudiandae fugit fuga recusandae itaque cum"
        </Card.Text>
  </Card>

  <Card   style={{ width: '18rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'  }}>
    <Card.Img height={"200px"}  variant="top" src={people2} />
    <Card.Body>
      <Card.Title className='text-center fw-bold'>Elizebath</Card.Title>
    </Card.Body>
    <Card.Text style={{textAlign:"left"}}>
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, at ullam facere repellendus, placeat, vitae omnis nam nisi tempora hic velit a rem ipsum repudiandae fugit fuga recusandae itaque cum"
</Card.Text>

  </Card>

  <Card   style={{ width: '18rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
    <Card.Img height={"200px"} variant="top" src={people3} />
    <Card.Body>
        <Card.Title className='text-center fw-bold'>Betty</Card.Title>
    </Card.Body>
    <Card.Text className='' style={{ textAlign: "left" }}>
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, at ullam facere repellendus, placeat, vitae omnis nam nisi tempora hic velit a rem ipsum repudiandae fugit fuga recusandae itaque cum"
    </Card.Text>
</Card>

</div>
  
  
   </div>
   </>
  )
}

export default Home