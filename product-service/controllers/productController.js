const ProductService = require("../services/productService");

const productService = new ProductService();

exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await productService.getProductById(id);
  } catch (error) {}
};
