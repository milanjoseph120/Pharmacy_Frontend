import { createSlice } from "@reduxjs/toolkit";


const wishlistSlice = createSlice({
    name:"wishlist",
    initialState:[],
    reducers:{
        // actions
        // function to add items to wishlist
        addToWishList:(state,action)=>{
            state.push(action.payload)
        }
    }
})
export const {addToWishList} = wishlistSlice.actions
export default wishlistSlice.reducer