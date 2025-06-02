const db = require("../models/index.js");

class BaseRepository {
  constructor(model) {
    this.model = model;
    this.db = db;
  }

  async getAll() {
    try {
      return await this.model.findAll();
    } catch (error) {
      throw error;
    }
  }

  async getById(id) {
    try {
      return await this.model.findByPk(id);
    } catch (error) {
      throw error;
    }
  }

  async create(data) {
    try {
      return await this.model.create(data);
    } catch (error) {
      throw error;
    }
  }

  async update(id, updateData) {
    try {
      return await this.model.update(updateData, { where: { id } });
    } catch (error) {
      throw error;
    }
  }

  async delete(id) {
    try {
      return await this.model.destroy({ where: { id } });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = BaseRepository;
