const mongoose = require("mongoose");
const sellerSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  cPassword: String,
});

module.exports = mongoose.model("Seller", sellerSchema);
