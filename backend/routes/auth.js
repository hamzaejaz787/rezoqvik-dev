const router = require("express").Router();
const { Seller_User } = require("../models/seller_user");
const { Buyers_User } = require("../models/buyer_user");

const joi = require("joi");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }

    const user = await Seller_User.findOne({ email: req.body.email });
    const buyer = await Buyers_User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(401).send({ message: "Invalid Email or Password!" });
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    const valid_buyerPassword = await bcrypt.compare(
      req.body.password,
      buyer.password
    );

    if (!validPassword) {
      return res.status(401).send({ message: "Invalid Password" });
    }
    const token = user.generateAuthToken();
    res.status(200).send({ data: token, message: "logged In Successfully" });

    if (!valid_buyerPassword) {
      return res.status(401).send({ message: "Invalid buyer password" });
    }
    const b_token = buyer.generateAuthToken();
    res.status(200).send({ data: b_token, message: "logged In Successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
});

const validate = (data) => {
  const schema = joi.object({
    email: joi
      .string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "co"] } })
      .label("E-Mail")
      .required(),
    password: joi.string().label("Password").required(),
  });
  return schema.validate(data);
};
module.exports = router;
