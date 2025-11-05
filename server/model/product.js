const mongoose = require("mongoose")

const productsSchema = mongoose.Schema({
  title : {
    type: String,
    required: true,
  },
  image : {
    type: String,
    required: true,
  },
  price : {
    type: Number,
    required: true,
  },
})


module.exports =  mongoose.model("Product", productsSchema)