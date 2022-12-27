const mongoose = require("mongoose");
const SellerSchema = mongoose.Schema(
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
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Seller", SellerSchema);
