const path = require("path");
const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/sellers", require("./routes/sellerRoutes"));

//Serve frontend on production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    );
  });
}

app.use(errorHandler);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listening on port ${port}...`));
