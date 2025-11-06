import { v2 as cloudinary } from 'cloudinary';


const cloudinary = cloudinary.config({
  cloude_name :process.env.CLOUDEINARY_CLOUD_NAME,
  api_key :process.env.CLOUDEINARY_API_KEY,
  api_secret :process.env.CLOUDEINARY_API_SECRET,
})

export default cloudinary;