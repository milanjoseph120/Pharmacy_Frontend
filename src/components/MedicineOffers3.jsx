import React from 'react'
import Card from 'react-bootstrap/Card';
import offer3 from '../pharmacy_images/offer3.jpg'
function MedicineOffers3() {
  return (
  //   <div>  
  //       <Card>
  //   <Card.Img height={"250px"} variant="top" src={offer3} />
  // </Card>
  // </div>


  <div className="container">
  <div className="row">
    <div className="col-md-6">
      <Card>
        <Card.Img  variant="top" src={offer3} style={{ width: "250px" , height:"250px" }} />
      </Card>
    </div>
  </div>
</div>
  )
}

export default MedicineOffers3