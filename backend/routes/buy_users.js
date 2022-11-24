const express = require("express");
const { Buyers_User, validate } = require("../models/buyer_user");
const { Seller_User } = require("../models/seller_user");

const joi = require("joi");
const bcrypt = require("bcrypt");
const app= express();
const router = express.Router();
router.post("/", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error)
      if (error)
        return res.status(400).send({ message: error.details[0].message });
    //Buyer email check
    let user = await Buyers_User.findOne({ email: req.body.email });
    if (user)
      return res
        .status(409)
        .send({ message: "User With given email already exits" });
    //Seller email check
    let seller = await Seller_User.findOne({ email: req.body.email });
    if (seller)
      return res
        .status(409)
        .send({ message: "User With given email already exits" });

    let salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    await new Buyers_User({
      ...req.body,
      password: hashPassword,
      cPassword: hashPassword,
    }).save();
    res.status(201).send({ message: "User Created Sccussfully" });
  } catch (error) {
    res.status(500).send({ message: error });
  }
});

app.get("/api/buyer_user", (req, res) => {
  Buyers_User.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
  res.send("Welcome to the first Node.js Tutorial! - Clue Mediator");
});
module.exports = router;
