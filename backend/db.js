const bodyParser = require("body-parser");
const mongoose= require("mongoose");
module.exports= ()=>{
    const connectionParams={
        useNewUrlParser: true      
        
    };
    try{
        mongoose.connect(process.env.DB,connectionParams);
        console.log("connected to database successfully");
    }
    catch(error){
        console.log(error);
        console.log("couldn't connect to database");
    }
}