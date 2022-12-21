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

app.use(errorHandler);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listening on port ${port}...`));
