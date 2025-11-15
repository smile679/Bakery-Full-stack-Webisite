const express = require("express");
const {
  addToCart,
  fetchCartItems,
  updateCart,
  deleteFromCart,
} = require("../controllers/cart-controllers");

const router = express.Router();

router.post("/add", addToCart);
router.get("/get/:userId", fetchCartItems);
router.put("/update/:userId", updateCart);
router.delete("/delete", deleteFromCart);

module.exports = router;