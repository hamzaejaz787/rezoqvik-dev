const express = require("express");
const router = express.Router();
const { registerSeller, loginUser } = require("../controllers/userController");
const {
  getSellers,
  getSellerById,
} = require("../controllers/sellerController");

router.post("/", registerSeller);
router.post("/login", loginUser);
router.get("/", getSellers);
router.get("/seller/:id", getSellerById);

module.exports = router;
