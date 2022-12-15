const express = require("express");
const router = express.Router();
const { registerSeller, loginUser } = require("../controllers/userController");
const { getSellers } = require("../controllers/sellerController");

router.post("/", registerSeller);
router.post("/login", loginUser);
router.get("/seller", getSellers);

module.exports = router;
