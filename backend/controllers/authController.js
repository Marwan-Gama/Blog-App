const { User, registerUserValidation } = require("../models/User");
const Joi = require("joi");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");

/**
 * @desc   Register New User
 * @route  /api/auth/register
 * @method POST
 * @access public
 */
module.exports.registerUserController = asyncHandler(async (req, res) => {
  const { error } = registerUserValidation(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  let user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).json({ message: "user is already exist" });
  }

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  user = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashPassword,
  });
  await user.save();

  res
    .status(201)
    .json({ message: "you registered successfully, please login." });
});
