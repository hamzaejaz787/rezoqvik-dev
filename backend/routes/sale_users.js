const express = require("express");
const { Seller_User, validate } = require("../models/seller_user");
const { Buyers_User } = require("../models/buyer_user");
const bcrypt = require("bcrypt");
const multer = require("multer");
const path = require("path");
const cloudinary = require("cloudinary");
const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUD_API_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// router.use(express.static("public"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../public/sellerImages");
  },
  filename: (req, file, cb) => {
    const filename = `${Date.now()}-${Math.round(
      Math.random() * 1e9
    )}${path.extname(file.originalname)}`;
    cb(null, filename);
  },
});

const handleMulterData = multer({
  storage,
  limits: { fileSize: 1000000 * 5 },
});

router.post("/", handleMulterData.single("proImg"), async (req, res) => {
  try {
    const { error } = validate(req.body);

    if (error)
      if (error)
        return res.status(400).send({ message: error.details[0].message });

    //Check if user or buyer email exists
    const user = await Seller_User.findOne({ email: req.body.email });
    const buyer = await Buyers_User.findOne({ email: req.body.email });
    if (user || buyer) {
      return res
        .status(409)
        .send({ message: "User With given email already exits" });
    }

    let salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    await new Seller_User({
      ...req.body,
      password: hashPassword,
      cPassword: hashPassword,
    }).save();

    res.status(201).send({ message: "User Created Successfully" });
  } catch (error) {
    res.status(500).send({ message: error });
  }
});

module.exports = router;
