import  { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  imageIsLoading : false,
  imagesData : [],
}

export const handleImageUpload = createAsyncThunk('products/handleImageUpload',
  async(imageFile)=>{
    const data = new FormData();
    data.append("file_path", imageFile)
    const response =await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/products/upload-image`,
      data
    )

    return response?.data
  }
)

const imageUploadSlice = createSlice({
  name : "imageUpload",
  initialState,
  reducers : {},
  extraReducers : (builder)=>{
    builder.addCase(handleImageUpload.pending, (state)=>{
      state.ImageLoading = true;
    })
    .addCase(handleImageUpload.fulfilled, (state, action)=>{
      state.ImageLoading = false;
      state.imagesData = action.payload?.success ? action.payload?.data : [];
    })
    .addCase(handleImageUpload.rejected, (state, action)=>{
      state.ImageLoading = false;
      state.imagesData = [];
    })
  }
})

export default imageUploadSlice.reducer;