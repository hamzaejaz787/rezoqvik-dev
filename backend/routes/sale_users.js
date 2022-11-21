const express = require("express");
const { Seller_User, validate } = require("../models/seller_user");
const { Buyers_User } = require("../models/buyer_user");
const app = express();
const bcrypt = require("bcrypt");

const router = express.Router();
router.post("/", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error)
      if (error)
        return res.status(400).send({ message: error.details[0].message });

    const user = await Seller_User.findOne({ email: req.body.email });
    const buyer = await Buyers_User.findOne({ email: req.body.email });

    if (user || buyer)
      return res
        .status(409)
        .send({ message: "User With given email already exits" });

    let salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    await new Seller_User({
      ...req.body,
      password: hashPassword,
      cPassword: hashPassword,
    }).save();
    res.status(201).send({ message: "User Created Sccussfully" });
  } catch (error) {
    res.status(500).send({ message: error });
  }
});

app.get("/api/seller_user", (req, res) => {
  Seller_User.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
      console.log(data);
    }
  });
  res.send("Sale users backend");
});
module.exports = router;
