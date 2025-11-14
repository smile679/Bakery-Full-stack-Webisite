const Cart = require("../model/cart.js");

const addToCart = async(req, res) => {
  try {
    const {userId, productId, quantity} = req.body;
    if (!userId || !productId || !quantity) {
      return res.status(400).json({ 
        success : false,
        message: "Missing required fields",
      });
    }

    let userCart = await Cart.findOne({userId});
    if (!userCart) { 
     userCart = new Cart({
        userId,
        products : [{
          productId,
          quantity,
        }]
      })

    } else {
      const productIndex = userCart.products.findIndex(item => item.productId.toString() === productId )
      if(productIndex !== -1){
        userCart.products[productIndex].quantity += 1

        await userCart.save()
      } else {
        userCart.products.push({
          productId,
          quantity,
        })
      }
    }

    await userCart.save();

    res.status(201).json({
          success : true,
          message : "product added successfully!",
          data : userCart,
        })
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.status(500).json({ 
      success : false,
      message: "Internal Server Error",
    });
  }
};

const fetchCartItems = async(req, res) => {
  try {
    const {userId} = req.params;
    console.log(req.params);
    
    if (!userId){
      return res.status(400).json({ 
        success : false,
        message: "Missing userId!",
      });
    }

    let userCart = await Cart.findOne({userId}).populate({
      path : 'products.productId',
      select : 'title image price'
    })
    if (!userCart ){
      return res.status(404).json({ 
        success : false,
        message: "Cart not found!",
      });
    }

     //validate items if they are present or deleted by admin 
    const validItems = userCart.products.filter(productItem=>productItem.productId)

    if(validItems.length < userCart.products.length){
      userCart.products = validItems
      await userCart.save()
    }

    const populatedCartItems = validItems.map(item=> ({
      productId : item.productId._id,
      image : item.productId.image,
      title : item.productId.title,
      price : item.productId.price,
      quantity : item.quantity,
    }))

    res.status(200).json({
      success : true,
      message : "cart successfully fetched!",
      data : populatedCartItems,
    })

  } catch (error){
    console.error("Error fetching from cart:", error);
    res.status(500).json({ 
      success : false,
      message: "Internal Server Error",
    });
  }
};

const updateCart = async(req, res) => {
  try {
    const { userId } = req.params
    const { productId ,quantity } = req.body
      if(!quantity || !productId){
        res.status(500).json({ 
          success : false,
          message: "quantity not provided!",
        })
      }
    
    const userCart = await Cart.findOne({ userId })
    if(!userCart ){
       return res.status(404).json({ 
          success : false,
          message: "cart not found!",
        })
      }

    const productIndex = userCart.products.findIndex(item => item.productId === productId);
      if(productIndex !== -1){
        return res.status(404).json({
          success : false,
          message : "product not found!"
        })
      }

      userCart.products[productIndex].quantity = quantity;
      await userCart.save();
      res.status(200).json({
          success : true,
          message : "product updated successfully!",
          data : userCart,
        })
      
      

  } catch (error) {
    console.error("Error updating cart:", error);
    res.status(500).json({ 
      success : false,
      message: "Internal Server Error",
    })
  }
}

const removeFromCart = async(req, res) => {
  try {
  } catch (error) {
    console.error("Error deleting from cart:", error);
    res.status(500).json({ 
      success : false,
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  addToCart,
  fetchCartItems,
  updateCart,
  removeFromCart,
};