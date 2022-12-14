const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getSeller,
} = require("../controllers/userController");
const { protect } = require("../middleware/authJwt");

// router.route("/").get(getSeller).post(setSeller);
// router.route("/:id").put(updateSeller).delete(deleteSeller);

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/seller", getSeller);

module.exports = router;
