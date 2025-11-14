import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


const initialState = ({
  isLoading : false,
  cartItems : []
})


export const addToCart = createAsyncThunk("cart/addToCart",
  async({ userId, productId, quantity })=>{
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/cart/add`,
      { userId, productId, quantity }
    )

    return response?.data
  }
)

export const fetchCartItems = createAsyncThunk("cart/fetchCartItems",
  async({ userId })=>{
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/cart/get:${userId}`)

    return response?.data
  }
)

const cartSlice = createSlice({
  name : "cart",
  initialState,
  reducers : {},
  extraReducers : (builder=>{
    builder.addCase(addToCart.pending, (state)=>{
      state.isLoading = true
    }).addCase(addToCart.fulfilled, (state, action)=>{
      state.isLoading = false
      state.cartItems = action.payload?.success ? action.payload?.data : []
    }).addCase(addToCart.rejected, (state)=>{
      state.isLoading = false
      state.cartItems = []
    })
    .addCase(fetchCartItems.pending, (state)=>{
      state.isLoading = true
    }).addCase(fetchCartItems.fulfilled, (state, action)=>{
      state.isLoading = false
      state.cartItems = action.payload?.success ? action.payload?.data : []
    }).addCase(fetchCartItems.rejected, (state)=>{
      state.isLoading = false
      state.cartItems = []
    })
  })
})


export default cartSlice.reducer