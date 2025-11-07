import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../store/auth-slice/index.js"
import imageUploadReducer from "../store/admin/image-upload-slice.js"
import productReducer from "../store/products-slice/index.js"

 const store = configureStore({
   reducer: {
      auth : authReducer,
      products : productReducer,
      imageUpload : imageUploadReducer
   },
 })

export default store;