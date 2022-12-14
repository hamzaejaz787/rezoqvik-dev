const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUser,
} = require("../controllers/userController");
const { protect } = require("../middleware/authJwt");

// router.route("/").get(protect, getUser).post(setUser);
// router.route("/:id").put(protect, updateUser).delete(protect, deleteUser);

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/user", protect, getUser);

module.exports = router;
