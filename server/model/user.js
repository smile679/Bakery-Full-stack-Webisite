const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  userName : {
    type : String,
    required : true,
    trin : true,
  },
  email : {
    type : String,
    required : true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password : {
    type : String,
    required : true,
    minlength: 6,
  }
}, 
{
  timestamps : true,
}
)

module.exports = mongoose.model("User", userSchema)