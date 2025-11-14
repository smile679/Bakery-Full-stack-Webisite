const express = require("express");
const {
  addToCart,
  fetchCartItems,
  updateCart,
  removeFromCart,
} = require("../controllers/cart-controllers");

const router = express.Router();

router.post("/add", addToCart);
router.post("/get", fetchCartItems);
router.post("/update", updateCart);
router.post("/remove", removeFromCart);

module.exports = router;