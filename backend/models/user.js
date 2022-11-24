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
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: "3d",
  });
  return token;
};

const User = mongoose.model("registration", userSchema);

const validate = (data) => {
  const schema = joi.object({
    proImg: joi
      .string()
      .empty("")
      .default("default value")
      .label("Upload Profile Pic"),
    firstName: joi.string().label("First Name"),
    lastName: joi
      .string()
      .empty("")
      .default("default value")
      .label("Last Name"),
    email: joi
      .string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "co"] } })
      .label("E-Mail"),
    password: joi.string().label("Password"),
    cPassword: joi.string().label("Confirm Password"),
  });
  return schema.validate(data);
};
module.exports = { User, validate };
