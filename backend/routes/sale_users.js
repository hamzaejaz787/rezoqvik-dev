const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const { Seller_User, validate } = require("../models/seller_user");
const { Buyers_User } = require("../models/buyer_user");
const app = express();
const bcrypt = require("bcrypt");
const path = require("path");
const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.static("public"));

const Storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(
      null,
      path.join(__dirname, "../public/sellerImages"),
      function (err, succ) {
        if (err) throw err;
      }
    );
  },
  filename: (req, file, cb) => {
    const filename = Date.now() + "_" + file.originalname;
    cb(null, filename, function (error, success) {
      if (error) throw error;
    });
  },
});

let upLoad = multer({
  storage: Storage,
});

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
