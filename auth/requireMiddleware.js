const Users = require("../users/users-model");
const bcrypt = require("bcryptjs");

const authRequired = (req, res, next) => {
  if (req.session && req.session.user) {
    next();
  } else {
    res.status(400).json({ messege: "Invalid Credentials" });
  }
};
module.exports = authRequired;
