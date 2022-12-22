const asyncHandler = require("express-async-handler");
const Seller = require("../models/sellerModel");

const getSellers = asyncHandler(async (req, res) => {
  //Gets seller data without passwords
  const sellers = await Seller.find().select("-password -cPassword");
  res.json(sellers);
});

module.exports = { getSellers };
