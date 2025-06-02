const BaseRepository = require("./baseRepository");
const { Product } = require("../models");

class ProductRepository extends BaseRepository {
  constructor() {
    super(Product);
  }
}

module.exports = ProductRepository;
