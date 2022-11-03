require("dotenv").config();
const express = require("express");
const bodyParser=require("body-parser");
const app = express();
const cors= require("cors");
const connection= require('./db')
const userRoutes=require("./routes/users");
const authRoutes= require("./routes/auth");
// middleWares
app.use(express.json());
app.use(cors());
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
// database connection
connection();


//Routes
app.use("/api/users",userRoutes);
app.use("/api/auth", authRoutes);

// request handlers
app.get('/', (req, res) => {
    res.send('Welcome to the first Node.js Tutorial! - Clue Mediator');
});

const port = process.env.PORT || 8080;
app.listen(port, ()=>console.log(`listening on port ${port}...`));