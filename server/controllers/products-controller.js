const product = require("../model/product");

const addProduct = async (req, res) => {
  try {
    const { title, image, price } = req.body;
    if ((!title, !price, !image)) {
      return res.status(404).json({
        success: false,
        message: "Image, title or price not provided!",
      });
    }

    const newProduct = new product({
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
    const products = await product.find({});
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

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, image, price } = req.body;
    if (!id) {
      return res.status(404).json({
        success: false,
        message: "Product Id is required!",
      });
    }

    if (!title || !image || !price) {
      return res.status(404).json({
        success: false,
        message: "Title, Image or Price not provided!",
      });
    }

    const updateProduct = await findByIdAndUpdate(
      id,
      { title, image, price },
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

    const deleteProduct = await findByIdAndDelete(id);
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

module.exports = { addProduct, fetchProducts, updateProduct, deleteProduct };