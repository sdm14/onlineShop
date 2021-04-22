const uuid = require("uuid");
const path = require("path");
const { Device } = require("../models/models");
const ApiError = require("../error/ApiError");

class DeviceController {
  async getAll(req, res) {
    const devices = await Device.findAll();
    res.json(devices);
  }

  async getOne() {}

  async create(req, res, next) {
    try {
      const { name, price, brandId, typeId, info } = req.body;
      const { img } = req.files;
      let filename = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", filename));

      const device = await Device.create({
        name,
        price,
        brandId,
        typeId,
        img: filename,
      });

      return res.json(device);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

module.exports = new DeviceController();
