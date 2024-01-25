// register api

import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commonAPISS"

// register api
export const registerAPI = async(admin)=>{
   return await commonAPI("POST",`${BASE_URL}/admin/register`,admin,"")
}

// login api

export const loginAPI = async(admin)=>{
   return await commonAPI("POST" ,`${BASE_URL}/admin/login`,admin,"")
}

// add items..
 export const addItemAPI = async(reqBody,reqHeader)=>{
   return await commonAPI("POST" ,`${BASE_URL}/items/add`,reqBody,reqHeader)
 }

//  all-items
export const allItemAPI = async(searchKey,reqHeader)=>{
   //  query 
   return await commonAPI("GET" ,`${BASE_URL}/items/home-items?search=${searchKey}`,"",reqHeader)
 }

//  Admin items
export const adminItemAPI = async(reqHeader)=>{
   return await commonAPI("GET" ,`${BASE_URL}/admin/home-items`,"",reqHeader)
 }

//  edit items
export const editItemAPI = async(itemID,reqBody,reqHeader)=>{
   // path parameter
   return await commonAPI("PUT" ,`${BASE_URL}/items/edit/${itemID}`,reqBody,reqHeader)
 }

//  delete item
export const deleteItemAPI = async(itemID,reqHeader)=>{
   // path parameter
   return await commonAPI("DELETE" ,`${BASE_URL}/items/remove/${itemID}`,{},reqHeader)
 }

//  user register

export const userRegisterAPI = async(users)=>{
   return await commonAPI("POST",`${BASE_URL}/user/useRegister`,users,"")
}
// user login
export const userLoginAPI = async(users)=>{
   return await commonAPI("POST",`${BASE_URL}/user/userLogin`,users,"")
}

export const userItemAPI = async(searchKey,reqHeader)=>{
   //  query 
   return await commonAPI("GET" ,`${BASE_URL}/items/user-items?search=${searchKey}`,"",reqHeader)
 }



