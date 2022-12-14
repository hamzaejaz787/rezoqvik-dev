const mongoose = require("mongoose");
const sellerSchema = mongoose.Schema(
  {
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
    cPassword: {
      type: String,
      required: [true, "Correct password required!"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Seller", sellerSchema);
