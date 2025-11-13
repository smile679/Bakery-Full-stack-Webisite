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
      const productIndex = userCart.products.findIndex(item => item.productId === productId )
      if(productIndex !== -1){
        return res.status(400).json({
          success : false,
          message : "product already added!"
        })
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

const updateCart = async(req, res) => {
  try {
    const { userId } = req.params
    const { quantity } = req.body
      if(!quantity ){
        res.status(500).json({ 
          success : false,
          message: "quantity not provided!",
        })
      }
    
    const userCart = await Cart.findOne({ userId })
    if(!userCart ){
        res.status(500).json({ 
          success : false,
          message: "cart not found!",
        })
      }

  

  } catch (error) {
    console.error("Error updating cart:", error);
    res.status(500).json({ 
      success : false,
      message: "Internal Server Error",
    });
  }
};

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
  updateCart,
  removeFromCart,
};