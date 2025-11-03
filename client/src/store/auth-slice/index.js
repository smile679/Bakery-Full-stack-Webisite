import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'

const initialState = {
  isLoading : false,
  isAuthenticated : false,
  user : null,
}

export const registerUser = createAsyncThunk('auth/loginUser',
  async(formData)=>{
    const response = await axios.post(`${meta.process.env.BACKEND_URL}/api/auth/register`,
      formData, { withCredentials: true }
    )

    return response?.data
  }
)

export const loginUser = createAsyncThunk('auth/loginUser',
  async(formData)=>{
    const response = await axios.get(`${meta.process.env.BACKEND_URL}/api/auth/login`,
      formData, { withCredentials: true }
    )

    return response?.data
  }
)

const authSlice = createSlice({
  name : 'Auth',
  initialState,
  reducers : {},
  extraReducers : (builder)=>{
    builder.addCase('registerUser/pending', (state)=>{
      state.isLoading = true
    })
    builder.addCase('registerUser/fulfilled', (state, action)=>{
      state.isLoading = false
      state.isAuthenticated = true
      state.user = action.payload.data
    })
    builder.addCase('registerUser/rejected', (state)=>{
      state.isLoading = false
      state.isAuthenticated = false
      state.user = null
    })
    builder.addCase('loginUser/pending', (state)=>{
      state.isLoading = true
    })
    builder.addCase('loginUser/fulfilled', (state, action)=>{
      state.isLoading = false
      state.isAuthenticated = true
      state.user = action.payload.data
    })
    builder.addCase('loginUser/rejected', (state)=>{
      state.isLoading = false
      state.isAuthenticated = false
      state.user = null
    })
  }
})


export default authSlice;