const product = require("../model/product");



const addProduct = async(req, res) => {

  try{
      const { title, image, price } = req.body;
  if(!title, !price, !image){
    return res.status(401).json({
      success : false,
      message : "Image, Title or Price not provided!"
    })
  }

  const products = product({
    title,
    image,
    price,
  })

  await products.save()

  res.status(200).json({
    success : true,
    message : "Product successfully added",
    data : products,
  })

  }catch(error){
    console.log(error);
    res.status(500).json({
    success : false,
    message : "Internal server error!"
   })
  }
}

const fetchProducts = async(req, res)=>{
  try{
    const products = await product.find({})
    if(!products){
     return res.status(200).json({
      success : true,
      message : "Product successfully added"
    })
    }
    
  res.status(201).json({
    success : true,
    data : products,
  })
  }catch(error){
      console.log(error);
      res.status(500).json({
      success : false,
      message : "Product successfully added"
    })
  }
}

const updateProducts = async(req, res)=>{
  try{
    const { id } = req.params
    if(!id){
     return res.status(400).json({
        success : false,
        message : "Id not provided!"
      })
    }

    const editProduct = await findByIdAndUpdate(id)
    if(!editProduct){
      res.status(400).json({
        success : false,
        message : "Product not found!"
      })
    }

  }catch(error){
   console.log(error);
   res.status(200).json({
    success : true,
    message : "Product successfully added"
  })
  }
}

// add
// delete
// fetch
// update