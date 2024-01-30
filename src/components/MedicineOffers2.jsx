import React from 'react'
import Card from 'react-bootstrap/Card';
import offer2 from '../pharmacy_images/offer2.jpg'
function MedicineOffers2() {
  return (
  //   <>
  // <Card>
  //     <Card.Img height={"250px"} variant="top" src={offer2} />
  //   </Card>
  //   </>


  <div className="container">
  <div className="row">
    <div className="col-md-6">
      <Card>
        <Card.Img  variant="top" src={offer2} style={{ width: "250px" , height:"250px" }}  />
      </Card>
    </div>
  </div>
</div>
  )
}

export default MedicineOffers2