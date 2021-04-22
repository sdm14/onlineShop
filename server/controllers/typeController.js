const { Type } = require("../models/models");
const ApiError = require("../error/ApiError");

class TypeController {
  async getAll(req, res) {
    const types = await Type.findAll();
    return res.json(types);
  }
  async create(req, res) {
    console.log("RRRRR");
    const { name } = req.body;
    const type = await Type.create({ name });
    return res.json(type);
  }
}

module.exports = new TypeController();