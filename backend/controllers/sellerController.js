const asyncHandler = require("express-async-handler");
const Seller = require("../models/sellerModel");

const getSeller = asyncHandler(async (req, res) => {
  const sellers = await Seller.find();
  res.status(200).json(sellers);
});

const setSeller = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Please add seller info!");
  }

  const seller = await Seller.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    cPassword: req.body.cPassword,
  });
  res.status(200).json(seller);
});

const updateSeller = asyncHandler(async (req, res) => {
  const seller = await Seller.findById(req.params.id);

  if (!seller) {
    res.status(400);
    throw new Error("User not found!");
  }

  const updatedSeller = await Seller.findByIdAndUpdate(
    req.params.id.at,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedSeller);
});

const deleteSeller = asyncHandler(async (req, res) => {
  const seller = await Seller.findById(req.params.id);

  if (!seller) {
    res.status(400);
    throw new Error("User not found");
  }

  await seller.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getSeller,
  setSeller,
  updateSeller,
  deleteSeller,
};
