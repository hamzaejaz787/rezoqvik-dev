const mongoose = require("mongoose");
const joi = require("joi");

const UserSchema = mongoose.Schema(
  {
    proImg: {
      type: String,
    },
    role: {
      type: String,
    },
    firstName: {
      type: String,
      required: [true, "First name is required!"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required!"],
    },
    email: {
      type: String,
      required: [true, "Email required!"],
    },
    password: {
      type: String,
      required: [true, "Password required!"],
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const validate = (user) => {
  const schema = joi.object({
    firstName: joi.string().min(3).max(255).required(),
    email: joi.string().email().required(),
  });

  return schema.validate(user);
};

module.exports = mongoose.model("User", UserSchema);
