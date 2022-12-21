const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Seller = require("../models/sellerModel");

const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password, cPassword } = req.body;

  if (!firstName || !lastName || !email || !password || !cPassword) {
    res.status(400);
    throw new Error("Please add all the required fields");
  }

  //Check if the users already exist
  const userExists = await User.findOne({ email });
  const sellerExists = await Seller.findOne({ email });
  if (userExists || sellerExists) {
    res.status(400);
    throw new Error("Email already exists");
  }

  //Hash passwords
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const hashedConfirmPassword = await bcrypt.hash(cPassword, salt);

  //Create user
  const user = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    cPassword: hashedConfirmPassword,
  });

  // const seller = await Seller.create({
  //   firstName,
  //   lastName,
  //   email,
  //   password: hashedPassword,
  //   cPassword: hashedConfirmPassword,
  // });

  if (user) {
    res.status(201).json({
      _id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const registerSeller = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password, cPassword } = req.body;

  if (!firstName || !lastName || !email || !password || !cPassword) {
    res.status(400);
    throw new Error("Please add all the required fields");
  }

  //Check if the users already exist
  const userExists = await User.findOne({ email });
  const sellerExists = await Seller.findOne({ email });
  if (userExists || sellerExists) {
    res.status(400);
    throw new Error("Email already exists");
  }

  //Hash passwords
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const hashedConfirmPassword = await bcrypt.hash(cPassword, salt);

  const seller = await Seller.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    cPassword: hashedConfirmPassword,
  });

  if (seller) {
    res.status(201).json({
      _id: seller.id,
      firstName: seller.firstName,
      lastName: seller.lastName,
      email: seller.email,
      token: generateToken(seller._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //Get emails
  const user = await User.findOne({ email });
  const seller = await Seller.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token: generateToken(user._id),
    });
  } else if (seller && (await bcrypt.compare(password, seller.password))) {
    res.json({
      _id: seller.id,
      firstName: seller.firstName,
      lastName: seller.lastName,
      email: seller.email,
      token: generateToken(seller._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials!");
  }
});

const getUser = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

//Generate Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWTPRIVATEKEY, { expiresIn: "2d" });
};

module.exports = { registerUser, registerSeller, loginUser, getUser };
