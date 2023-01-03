const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUser,
} = require("../controllers/userController");
const { protect } = require("../middleware/authJwt");
const parser = require("../config/cloudinary.config");

router.post("/", parser.single("proImg"), registerUser);
router.post("/login", loginUser);
router.get("/user", protect, getUser);

module.exports = router;
