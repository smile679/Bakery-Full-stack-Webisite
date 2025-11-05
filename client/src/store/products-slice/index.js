import  { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading : false,
  products : [],
}

export const addProduct = createAsyncThunk('products/addProduct',
  async({ title, image, price})=>{
    const response =await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/products/add`,
      {title, image, price}, { withCredentials: true }
    )

    return response?.data
  }
)

export const fetchProducts = createAsyncThunk('products/fetchProducts',
  async()=>{
    const response =await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/get`, 
      { withCredentials: true })

    return response?.data
  }
)

export const updateProducts = createAsyncThunk('products/updateProducts',
  async({ title, image, price, id})=>{
    const response =await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/products/update/${id}`,
      {title, image, price},
      { withCredentials: true }
    )

    return response?.data
  }
)

export const deleteProducts = createAsyncThunk('products/deleteProducts',
  async({ id })=>{
    const response =await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/products/delete/${id}`,
      { withCredentials: true }
    )

    return response?.data
  }
)

const productsSlice = createSlice({
  name : "products",
  initialState,
  reducers : {},
  extraReducers : (builder)=>{
    builder.addCase(addProduct.pending, (state)=>{
      state.isLoading = true;
    })
    .addCase(addProduct.fulfilled, (state, action)=>{
      state.isLoading = false;
      state.products = action.payload?.success ? action.payload?.data : state.products;
    })
    .addCase(addProduct.rejected, (state, action)=>{
      state.isLoading = false;
    })
    .addCase(fetchProducts.pending, (state)=>{
      state.isLoading = true;
    })
    .addCase(fetchProducts.fulfilled, (state, action)=>{
      state.isLoading = false;
      state.products = action.payload?.success ? action.payload?.data : [];
    })
    .addCase(fetchProducts.rejected, (state, action)=>{
      state.isLoading = false;
      state.products = [];
    })
    .addCase(updateProducts.pending, (state)=>{
      state.isLoading = true;
    })
    .addCase(updateProducts.fulfilled, (state, action)=>{
      state.isLoading = false;
    })
    .addCase(updateProducts.rejected, (state, action)=>{
      state.isLoading = false;
    })
    .addCase(deleteProducts.pending, (state)=>{
      state.isLoading = true;
    })
    .addCase(deleteProducts.fulfilled, (state, action)=>{
      state.isLoading = false;
    })

  }
})

export default productsSlice.reducer;