import {createSlice} from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cartItem:[]
    },
    reducers:{
        adCart:(state,action)=>{
            state.cartItem.push(action.payload)
        }
    }
})

export const {adCart} = cartSlice.actions
export default cartSlice.reducer