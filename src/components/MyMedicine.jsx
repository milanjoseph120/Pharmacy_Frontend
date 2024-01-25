import React, { useContext, useEffect, useState } from 'react'
import AddMedicine from './AddMedicine'
import { adminItemAPI, deleteItemAPI } from '../Services/allAPI'
import { addItemResponseContext, editItemResponseContext } from '../Context/ContextShare'
import EditItem from './EditItem'

function MyMedicine() {
  const {editItemResponse , setEditItemResponse} = useContext(editItemResponseContext)
  const [adminItems , setAdminItems] = useState([])

  const {addItemResponse,setAddItemResponse} =useContext(addItemResponseContext)

  const getadminAddedItems = async()=>{
     const token = sessionStorage.getItem("token")
     const reqHeader = {
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    }
    const result = await adminItemAPI(reqHeader)
    console.log(result.data);
    setAdminItems(result.data)
  }
  useEffect(()=>{
    getadminAddedItems()
  },[addItemResponse,editItemResponse])

  const handleDelete = async(id)=>{
         const token = sessionStorage.getItem("token")
         const reqHeader = {
          "Content-Type":"application/json",
          "Authorization":`Bearer ${token}`
        }
        const result = await deleteItemAPI(id,reqHeader)
        console.log(result);
        if(result.status===200){
          getadminAddedItems()
        }
        else{
          console.log(result.response.data);
        }
  }
  return (
    <div className='card shadow p-5'>
     <div className='d-flex justify-content-between'>
        <h3>Added Items & Test</h3>
        <AddMedicine/>
     </div>
    { adminItems?.length>0?
    adminItems?.map((item)=>(<div className='mt-4'>
    <div className='border align-items-center p-3 d-flex'>
      <h5>{item.name}</h5>
      <div className='ms-auto d-flex'>
       <EditItem edit={item}/>
        <button className='btn'><i class="fa-solid fa-trash" onClick={()=>handleDelete(item._id)}></i></button>
      </div>
    </div>
   </div>))
    :<p className='text-danger fw-bolder fs-4'>No Items Uploaded By Admin</p>
     }
    </div>
  )
}

export default MyMedicine