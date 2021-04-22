const ApiError = require("../error/ApiError");

class UserController {
  async check(req, res, next) {
    const { id } = req.query;
    if (!id) {
      return next(ApiError.badRequest("Не задан ID"));
    }
    res.json({ id });
  }

  async login() {}

  async registration() {
    console.log("REGIT");
  }
}

module.exports = new UserController();
