const { imageUploadUtil } = require("../config/cloudinary");
const Product = require("../model/product");

const handleImageUpload = async (req, res) => {
  try {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    const url = "data:" + req.file.mimetype + ";base64," + b64;
    const result = await imageUploadUtil(url);

    res.status(200).json({
      success: true,
      message: "Image uploaded successfully",
      data: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Image upload failed",
    });
  }
};

const addProduct = async (req, res) => {
  try {
    const { title, image, price } = req.body;
    if ((!title, !price, !image)) {
      return res.status(404).json({
        success: false,
        message: "Image, title or price not provided!",
      });
    }

    const newProduct = new Product({
      title,
      image,
      price,
    });

    await newProduct.save();

    res.status(201).json({
      success: true,
      message: "Product successfully added",
      data: newProduct,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error!",
    });
  }
};

const fetchProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    if (!products) {
      return res.status(404).json({
        success: false,
        message: "Products not found!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Products successfully fetched!",
      data: products,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const fetchSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product successfully fetched!",
      data: product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, price } = req.body;
    if (!id) {
      return res.status(404).json({
        success: false,
        message: "Product id is required!",
      });
    }

    if (!title || !price) {
      return res.status(404).json({
        success: false,
        message: "Title or Price not provided!",
      });
    }

    const updateProduct = await Product.findByIdAndUpdate(
      id,
      { title, price },
      { new: true, runValidators: true }
    );
    if (!updateProduct) {
      res.status(404).json({
        success: false,
        message: "Product not found!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product successfully updated!",
      data: updateProduct,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).json({
        success: false,
        message: "Product Id not provided!",
      });
    }

    const deleteProduct = await Product.findByIdAndDelete(id);
    if (!deleteProduct) {
      res.status(404).json({
        success: false,
        message: "Product not found!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product successfully deleted!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: true,
      message: "Internal server error",
    });
  }
};

module.exports = {
  addProduct,
  fetchProducts,
  fetchSingleProduct,
  updateProduct,
  deleteProduct,
  handleImageUpload,
};
