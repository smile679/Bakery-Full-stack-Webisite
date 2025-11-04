import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'

const initialState = {
  isLoading : false,
  isAuthenticated : false,
  user : null,
}

export const registerUser = createAsyncThunk('auth/registerUser',
  async(formData)=>{
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/register`,
      formData, { withCredentials: true }
    )

    return response?.data
  }
)

export const loginUser = createAsyncThunk('auth/loginUser',
  async(formData)=>{
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/login`,
       formData, { withCredentials: true }
    )

    return response?.data
  }
)

const authSlice = createSlice({
  name : 'auth',
  initialState,
  reducers : {},
  extraReducers : (builder)=>{
    builder.addCase(registerUser.pending, (state)=>{
      state.isLoading = true
    })
    .addCase(registerUser.fulfilled, (state, action)=>{
      state.isLoading = false
      state.isAuthenticated = false
      state.user = null
    })
    .addCase(registerUser.rejected, (state)=>{
      state.isLoading = false
      state.isAuthenticated = false
      state.user = null
    })
    .addCase(loginUser.pending, (state)=>{
      state.isLoading = true
    })
    .addCase(loginUser.fulfilled, (state, action)=>{
      state.isLoading = false
      state.isAuthenticated = true
      state.user = action.payload?.data
    })
    .addCase(loginUser.rejected, (state)=>{
      state.isLoading = false
      state.isAuthenticated = false
      state.user = null
    })
  }
})


export default authSlice.reducer;