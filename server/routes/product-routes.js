const express = require("express");
const {
  addProduct,
  fetchProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/products-controller");

const router = express.Router();

router.post("/add", addProduct);
router.get("/get", fetchProducts);
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);

module.exports = router;