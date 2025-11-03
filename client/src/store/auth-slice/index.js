import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'

const initialState = {
  isLoading : false,
  user,
}

export const registerUser = createAsyncThunk('auth/loginUser',
  async(formData)=>{
    const response = await axios.post(`${meta.process.env.BACKEND_URL}/api/auth/login`,
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

const AuthSlice = createSlice({
  name : 'Auth',
  initialState,
  reducers : {},
  extraReducers : (builder)=>{
    builder.addCase()
  }
})