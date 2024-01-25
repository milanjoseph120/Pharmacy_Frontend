import React from 'react'
import Card from 'react-bootstrap/Card';
import offer1 from '../pharmacy_images/offer1.jpg'


function MedicineOffers() {
  return (
    <>
     <Card>
      <Card.Img height={"250px"}  variant="top" src={offer1} />
    </Card>
    </>
  )
}

export default MedicineOffers