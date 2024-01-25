
import React, { createContext } from 'react'
import { useState } from 'react'

 export const addItemResponseContext = createContext()
 export const editItemResponseContext = createContext()
 export const isAuthTokenContext = createContext()

function ContextShare({children}) {
    const [addItemResponse , setAddItemResponse] = useState({})
    const [editItemResponse , setEditItemResponse] = useState({})
    const [isAuthToken , setIsAuthToken] = useState(false)
  return (
    <>
    <addItemResponseContext.Provider value={{addItemResponse,setAddItemResponse}}>
       <editItemResponseContext.Provider value={{editItemResponse , setEditItemResponse}}>
      <isAuthTokenContext.Provider value={{isAuthToken , setIsAuthToken}}>
      {children}
      </isAuthTokenContext.Provider>
       </editItemResponseContext.Provider>
    </addItemResponseContext.Provider>
    </>
  )
}

export default ContextShare