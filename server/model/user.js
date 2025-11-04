const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  userName : {
    type : String,
    required : true,
    trim : true,
    unique : true,
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
  },
  role : {
    type : String,
    enum : [ "user", "admin" ],
    default : "user",
  }
}, 
{
  timestamps : true,
}
)

module.exports = mongoose.model("User", userSchema)