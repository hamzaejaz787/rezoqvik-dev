const asyncHandler = require("express-async-handler");
const Seller = require("../models/sellerModel");

const getSellers = asyncHandler(async (req, res) => {
  //Gets seller data without passwords
  const sellers = await Seller.find().select("-password");
  res.status(200).json(sellers);
});

const getSellerById = asyncHandler(async (req, res) => {
  const seller = await Seller.findById(req.params.id).select("-password");
  res.status(200).json(seller);
});

module.exports = { getSellers, getSellerById };
