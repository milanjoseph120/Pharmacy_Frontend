import React from 'react'
import Card from 'react-bootstrap/Card';
import offer4 from '../pharmacy_images/offer4.jpg'

function MedicineOffers4() {
  return (
  //   <div>  
  //       <Card>
  //   <Card.Img height={"250px"} variant="top" src={offer4} />
  // </Card>
  // </div>




  <div className="container">
  <div className="row">
    <div className="col-md-6">
      <Card>
        <Card.Img  variant="top" src={offer4} style={{ width: "250px" , height:"250px" }} />
      </Card>
    </div>
  </div>
</div>
  )
}

export default MedicineOffers4