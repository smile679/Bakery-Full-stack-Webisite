const express = require("express");
const {
  addProduct,
  fetchProducts,
  updateProduct,
  deleteProduct,
  handleImageUpload,
} = require("../controllers/products-controller");
const { upload } = require("../config/cloudinary");

const router = express.Router();

router.post("/add", addProduct);
router.post("/upload-image", upload.single("file_path"), handleImageUpload);
router.get("/get", fetchProducts);
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);

module.exports = router;