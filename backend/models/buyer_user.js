const mongoose =require("mongoose");
const jwt = require("jsonwebtoken");
const joi = require("joi");
const passwordComplexity = require("joi-password-complexity");


const userSchema = new mongoose.Schema({
    proImg:{type: String, required:false},
    firstName:{type: String, required: true},
    lastName:{type: String, required: false},
    email:{type: String, required: true},
    password:{type: String, required: true},
    cPassword:{type: String, required: true},
});

    userSchema.methods.generateAuthToken = function(){
        const b_token =jwt.sign({_id:this._id}, process.env.JWTPRIVATEKEY,{expiresIn:"3d"});
        return b_token
    }

    const Buyers_User= mongoose.model("buyers", userSchema);

    const validate =(data)=>{
        const schema =joi.object({
            proImg:joi.string().label("Upload Profile Pic"),
            firstName: joi.string().required().label("First Name"),
            lastName: joi.string().label("Last Name"),
            email: joi.string().required().label("E-Mail"),
            password: joi.string().required().label("Password"),
            cPassword: joi.string().required().label("Conform Password"),
        });
        return schema.validate(data)
    };
    module.exports={Buyers_User,validate}