const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/userController");
const { getSellers } = require("../controllers/sellerController");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/seller", getSellers);

module.exports = router;
