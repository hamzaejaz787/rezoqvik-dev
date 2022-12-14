const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getSeller,
} = require("../controllers/userController");
const { protect } = require("../middleware/authJwt");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/seller", protect, getSeller);

module.exports = router;
