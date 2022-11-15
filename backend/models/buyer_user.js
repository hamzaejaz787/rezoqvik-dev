const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
  proImg: String,
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  cPassword: String,
});

userSchema.methods.generateAuthToken = function () {
  const b_token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: "3d",
  });
  return b_token;
};

const Buyers_User = mongoose.model("buyers", userSchema);

const validate = (data) => {
  const schema = joi.object({
    proImg: joi.string().label("Upload Profile Pic"),
    firstName: joi.string().label("First Name"),
    lastName: joi.string().label("Last Name"),
    email: joi.string().label("E-Mail"),
    password: joi.string().label("Password"),
    cPassword: joi.string().label("Confirm Password"),
  });
  return schema.validate(data);
};
module.exports = { Buyers_User, validate };
