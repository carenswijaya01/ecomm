const ProductRepository = require("../repositories/productRepository");

class ProductService {
  constructor() {
    this.productRepository = new ProductRepository();
  }

  async getProducts(request) {
    try {
      return await this.productRepository.getAll();
    } catch (error) {
      console.error({ message: error.message });
      throw error;
    }
  }

  async getProductById(id) {
    try {
      // versi 1
      // return await this.productRepository.getById(id);

      // versi 2
      const result = await this.productRepository.getById(id);
      if (!result) throw new Error("DATA_NOT_FOUND");
      return result;
    } catch (error) {
      console.error({ message: error.message });
      throw error;
    }
  }

  async createProduct(data) {
    try {
      await this.productRepository.create(data);
      return true;
    } catch (error) {
      console.error({ message: error.message });
      throw error;
    }
  }

  async updateProductById(id, updateData) {
    try {
      const result = await this.productRepository.update(id, updateData);
      if (!result[0]) throw new Error("DATA_NOT_FOUND");
      return true;
    } catch (error) {
      console.error({ message: error.message });
      throw error;
    }
  }

  async deleteProductById(id) {
    try {
      const result = await this.productRepository.delete(id);
      if (!result) throw new Error("DATA_NOT_FOUND");
      return true;
    } catch (error) {
      console.error({ message: error.message });
      throw error;
    }
  }
}

module.exports = ProductService;
