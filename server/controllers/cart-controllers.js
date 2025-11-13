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

    const user = await Cart.findOne(userId);
    if (!user) { 
      const newCart = new Cart({
        userId,
        productId,
        quantity,
      })

      await newCart.save();
    } else {
      const product = user.products.findIndex(item => item === productId )
      if(product !== -1){
        return res.status(400).json({
          success : false,
          message : "product already added!"
        })
      } else {
        user.products.push({
          productId,
          quantity,
        })
      }


    }


  } catch (error) {
    console.error("Error adding to cart:", error);
    res.status(500).json({ 
      success : true,
      message: "Internal Server Error",
    });
  }
};

const updateCart = async(req, res) => {
  try {
  } catch (error) {
    console.error("Error updating cart:", error);
    res.status(500).json({ 
      success : true,
      message: "Internal Server Error",
    });
  }
};

const deleteFromCart = async(req, res) => {
  try {
  } catch (error) {
    console.error("Error deleting from cart:", error);
    res.status(500).json({ 
      success : true,
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  addToCart,
  updateCart,
  deleteFromCart
};