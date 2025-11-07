import  { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading : false,
  productsList : [],
  singleProduct : null
}

export const addNewProduct = createAsyncThunk('products/addNewProduct',
  async({ title, price , image})=>{
    const response =await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/products/add`,
      {title, image, price},
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )

    return response?.data
  }
)

export const fetchProducts = createAsyncThunk('products/fetchProducts',
  async()=>{
    const response =await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/get`, )

    return response?.data
  }
)

export const fetchSingleProduct = createAsyncThunk('products/fetchSingleProduct',
  async(id)=>{
    const response =await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/get/${id}`)

    return response?.data
  }
)

export const editProducts = createAsyncThunk('products/editProducts',
  async({ title, price, id})=>{
    const response =await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/products/update/${id}`,
      {title, price},
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )

    return response?.data
  }
)

export const deleteProducts = createAsyncThunk('products/deleteProducts',
  async(id)=>{
    const response =await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/products/delete/${id}`)

    return response?.data
  }
)

const productsSlice = createSlice({
  name : "products",
  initialState,
  reducers : {},
  extraReducers : (builder)=>{
    builder.addCase(addNewProduct.pending, (state)=>{
      state.isLoading = true;
    })
    .addCase(addNewProduct.fulfilled, (state, action)=>{
      state.isLoading = false;
      state.productsList = action.payload?.success ? action.payload?.data : state.products;
    })
    .addCase(addNewProduct.rejected, (state, action)=>{
      state.isLoading = false;
    })
    .addCase(fetchProducts.pending, (state)=>{
      state.isLoading = true;
    })
    .addCase(fetchProducts.fulfilled, (state, action)=>{
      state.isLoading = false;
      state.productsList = action.payload?.success ? action.payload?.data : [];
    })
    .addCase(fetchProducts.rejected, (state, action)=>{
      state.isLoading = false;
      state.productsList = [];
    })
    .addCase(fetchSingleProduct.pending, (state)=>{
      state.isLoading = true;
    })
    .addCase(fetchSingleProduct.fulfilled, (state, action)=>{
      state.isLoading = false;
      state.singleProduct = action.payload?.success ? action.payload?.data : null;
    })
    .addCase(fetchSingleProduct.rejected, (state, action)=>{
      state.isLoading = false;
    })
    .addCase(editProducts.pending, (state)=>{
      state.isLoading = true;
    })
    .addCase(editProducts.fulfilled, (state, action)=>{
      state.isLoading = false;
    })
    .addCase(editProducts.rejected, (state, action)=>{
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