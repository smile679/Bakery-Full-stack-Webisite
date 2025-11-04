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
    console.log(response?.data, 'response?.data');
    return response?.data
  }
)

export const logOutUser = createAsyncThunk('auth/logOutUser',
  async()=>{
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/logout`,
      {}, { withCredentials: true }
    )

    return response?.data
  }
)

export const checkOutUser = createAsyncThunk('auth/checkOutUser',
  async()=>{
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/auth/checkout`,
       { withCredentials: true }
    )
    console.log(response?.data, 'response data in checkOutUser');
    return response?.data
  }
)

const authSlice = createSlice({
  name : 'auth',
  initialState,
  reducers : {
    resetUserData : (state)=>{
      state.isLoading = false
      state.isAuthenticated = false
      state.user = null
    }
  },
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
      state.isAuthenticated = action.payload?.success ? true : false
      state.user = action.payload?.success ? action.payload?.user : false
    })
    .addCase(loginUser.rejected, (state)=>{
      state.isLoading = false
      state.isAuthenticated = false
      state.user = null
    })
    .addCase(logOutUser.pending, (state)=>{
      state.isLoading = true
    })
    .addCase(logOutUser.fulfilled, (state, action)=>{
      state.isLoading = false
      state.isAuthenticated = false
      state.user = null
    })
    .addCase(checkOutUser.pending, (state)=>{
      state.isLoading = true
    })
    .addCase(checkOutUser.fulfilled, (state, action)=>{
      state.isLoading = false
      state.isAuthenticated = action.payload?.success ? true : false
      state.user = action.payload?.success ? action.payload?.user : null
    })
    .addCase(checkOutUser.rejected, (state)=>{
      state.isLoading = false
      state.isAuthenticated = false
       state.user = null
    })
  }
})

export const { resetUserData } = authSlice.actions;
export default authSlice.reducer;