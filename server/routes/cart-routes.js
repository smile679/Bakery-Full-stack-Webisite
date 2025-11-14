const express = require("express");
const {
  addToCart,
  fetchCartItems,
  updateCart,
  removeFromCart,
} = require("../controllers/cart-controllers");

const router = express.Router();

router.post("/add", addToCart);
router.get("/get/:userId", fetchCartItems);
router.put("/update", updateCart);
router.delete("/remove", removeFromCart);

module.exports = router;