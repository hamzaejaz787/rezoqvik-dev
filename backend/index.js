require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const connection = require("./db");
const saleUserRoutes = require("./routes/sale_users");
const buyUserRoutes = require("./routes/buy_users");
const authRoutes = require("./routes/auth");
const { Seller_User } = require("./models/seller_user");
const { Buyers_User } = require("./models/buyer_user");

app.use(express.json());
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// database connection
connection();

//Routes
app.use("/api/sale_users", saleUserRoutes);
app.use("/api/buy_users", buyUserRoutes);
app.use("/api/auth", authRoutes);

app.get("/api/sale_users", (req, res) => {
  Seller_User.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      return res.status(200).json(data);
    }
  });
});

app.get("/api/buy_users", (req, res) => {
  Buyers_User.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      return res.status(200).json(data);
    }
  });
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listening on port ${port}...`));
