const mongoose = request("mongoose")

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

const Products = mongoose.model("Product", productsSchema)
module.exports = Products