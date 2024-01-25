

import React, { useContext, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Row, Col} from 'react-bootstrap';
import { BASE_URL } from '../Services/baseurl';
import { editItemAPI } from '../Services/allAPI';
import { editItemResponseContext } from '../Context/ContextShare';

function EditItem({edit}) {
    const {editItemResponse , setEditItemResponse} = useContext(editItemResponseContext)
    const [show, setShow] = useState(false);
    const [itemDetails , setItemDetails] = useState({
        id:edit._id,
        name:edit.name,
        price:edit.price,
        details:edit.details,
        image:""
      })

      const [previewImage , setPreviewImage] = useState("")
      const handleClose = () => {
        setShow(false);
        handleClose1()
      }
    const handleShow = () => setShow(true);

       useEffect(()=>{
        if(itemDetails.image){
            setPreviewImage(URL.createObjectURL(itemDetails.image))
        }
       },[itemDetails.image])

       const handleClose1 = ()=>{
        setItemDetails({
            id:edit._id,
            name:edit.name,
            price:edit.price,
            details:edit.details,
            image:""
        })
        setPreviewImage("")
       }

       const handleUpdate = async()=>{
        const {id,name,price,details,image}=itemDetails

        if(!name || !price || !details){
            alert("please fill the form completley")
        }
        else{
            const reqBody = new FormData()
            reqBody.append("name",name)
            reqBody.append("price",price)
            reqBody.append("details",details)
            previewImage?reqBody.append("image",image):reqBody.append("image",edit.image)
            const token =sessionStorage.getItem("token")
        if(previewImage){
            const reqHeader = {
                "Content-Type":"multipart/form-data",
                "Authorization":`Bearer ${token}`
              }
              const result = await editItemAPI(id,reqBody,reqHeader)
              console.log(result);
              if(result.status==200){
                alert("Update Successfully")
                handleClose()
                setEditItemResponse(result.data)
              }
              else{
                console.log(result.response.data);
              }
        }
        else{
            const reqHeader = {
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
              }
              const result = await editItemAPI(id,reqBody,reqHeader)
              console.log(result);
              if(result.status==200){
                alert("Update Successfully")
                handleClose()
                setEditItemResponse(result.data)
              }
              else{
                console.log(result.response.data);
              }
        }
        }
        
       }
  return (
    <div>
         <button onClick={handleShow} className='btn'><i class="fa-solid fa-pen-to-square text-info"></i></button>



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
        <input id="image" type="file" style={{display:"none"}}onChange={(e)=>setItemDetails({...itemDetails,image:e.target.files[0]})}/>
        <img width={"100%"} src={previewImage?previewImage:`${BASE_URL}/uploads/${edit.image}`} alt="no image" className='rounded ' />
         </label>
            </Col>
            <Col md={6} className='mt-5'>
              <div>
                 <div className='mb-3 w-100'> 
               <input type="text" className='form-control' placeholder='Medicine Or LabTest Name' value={itemDetails.name} onChange={e=>setItemDetails({...itemDetails,name:e.target.value})}  />
               </div>
               <div className='mb-3 w-100'>
               <input type="text" className='form-control' placeholder='Medicine Or LabTest Price'  value={itemDetails.price} onChange={e=>setItemDetails({...itemDetails,price:e.target.value})} />
               </div>
               <div className='mb-3 w-100'>
               <textarea type="text" className='form-control' placeholder='Medicine Or LabTest Details'  value={itemDetails.details} onChange={e=>setItemDetails({...itemDetails,details:e.target.value})}  />
               </div>
              </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpdate}>Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default EditItem