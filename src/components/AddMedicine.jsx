import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addItemAPI } from '../Services/allAPI';
import { addItemResponseContext } from '../Context/ContextShare';
import { Link } from 'react-router-dom';

function AddMedicine() {
  // to hold the value of image url
  const [preview , setPreview] =useState("")

  const {addItemResponse,setAddItemResponse} = useContext(addItemResponseContext)

  const [itemDetails , setItemDetails] = useState({
    name:"",
    price:"",
    details:"",
    image:""
  })
    const [show, setShow] = useState(false);

    // state to hold the token
    const[token , setToken] = useState("")

    const handleClose = () => {
      setShow(false);
      handleClose1()
    }
    const handleShow = () => setShow(true);
    console.log(itemDetails);

    const handleClose1 = ()=>{
      setItemDetails({
        name:"",
        price:"",
        details:"",
        image:""
      })
      setPreview("")
    }

    useEffect(()=>{
   if(itemDetails.image)
   {(setPreview(URL.createObjectURL(itemDetails.image)))}
   else{
    setPreview("")
   }
    },[itemDetails.image])
console.log(preview);

// to get token for storing id 
useEffect(()=>{
   if(sessionStorage.getItem("token")){
   setToken(sessionStorage.getItem("token"))
}
else{
  setToken("")
}
},[])

// adding medicines etc...
    const handleAdd = async(e)=>{
     e.preventDefault()

     const {name,price,details,image} = itemDetails

     if(!name || !price || !details || !image){
      alert("please fill the form completely")
     }
     else{
    //  reqbody
    const reqBody = new FormData()
    // adding data to form data
    reqBody.append("name",name)
    reqBody.append("price",price)
    reqBody.append("details",details)
    reqBody.append("image",image)

   if(token) {
    const reqHeader = {
      "Content-Type":"multipart/form-data",
       "Authorization":`Bearer ${token}`
    }
      const result = await addItemAPI(reqBody,reqHeader)
      console.log(result);
      if(result.status===200){
        console.log(result.data);
        alert('Item Added succesfully ')
        handleClose()
        setAddItemResponse(result.data)
      }
      else{
        console.log(result.response.data);
      }
    }
     }
    }
  return (
    <>
     <Button variant="info" onClick={handleShow}>
        Add Items
      </Button>
      <Button variant="info" >
       <Link to={'/medicine'} style={{textDecoration:"none" , color:"white"}}> Medicine Page</Link>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Item Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
            <label htmlFor="image" className='text-center'>
        <input id="image" type="file" style={{display:"none"}} onChange={(e)=>setItemDetails({...itemDetails,image:e.target.files[0]})} />
        <img width={"100%"} src={preview?preview:"https://www.everypixel.com/covers/microstock/vector/health/pharmacy/cover.jpg"} alt="no image" className='rounded ' />
         </label>
            </Col>
            <Col md={6} className='mt-5'>
              <div>
                 <div className='mb-3 w-100'> 
               <input type="text" className='form-control' placeholder='Medicine Or LabTest Name' value={itemDetails.name} onChange={(e)=>setItemDetails({...itemDetails,name:e.target.value})} />
               </div>
               <div className='mb-3 w-100'>
               <input type="text" className='form-control' placeholder='Medicine Or LabTest Price' value={itemDetails.price} onChange={(e)=>setItemDetails({...itemDetails,price:e.target.value})} />
               </div>
               <div className='mb-3 w-100'>
               <textarea type="text" className='form-control' placeholder='Medicine Or LabTest Details' value={itemDetails.details} onChange={(e)=>setItemDetails({...itemDetails,details:e.target.value})} />
               </div>
              </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddMedicine