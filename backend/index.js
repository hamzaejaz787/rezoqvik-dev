require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const connection = require("./db");
const saleUserRoutes = require("./routes/sale_users");
const buyUserRoutes = require("./routes/buy_users");
const authRoutes = require("./routes/auth");
const { Seller_User } = require("./models/seller_user");

// middleWares
app.use(express.json());
app.use(cors());

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// database connection
connection();

//Routes
app.use("/api/sale_users", upload.single("image"), saleUserRoutes);
app.use("/api/buy_users", upload.single("image"), buyUserRoutes);
app.use("/api/auth", authRoutes);

// request handlers
app.get("/api/sale_users", (req, res) => {
  Seller_User.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
  res.send("Rezoqvik backend");
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listening on port ${port}...`));
