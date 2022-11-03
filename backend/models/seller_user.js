const mongoose =require("mongoose");
const jwt = require("jsonwebtoken");
const joi = require("joi");
const passwordComplexity = require("joi-password-complexity");


const userSchema = new mongoose.Schema({
    proImg:{type: String, required:false},
    firstName:{type: String, required: true},
    lastName:{type: String, required: true},
    email:{type: String, required: true},
    password:{type: String, required: true},
    cPassword:{type: String, required: true},
});

    userSchema.methods.generateAuthToken = function(){
        const token =jwt.sign({_id:this._id}, process.env.JWTPRIVATEKEY,{expiresIn:"3d"});
        return token
    }

    const Seller_User= mongoose.model("sellers", userSchema);

    const validate =(data)=>{
        const schema =joi.object({
            proImg: joi.string().label("Upload Profile Pic"),
            firstName: joi.string().required().label("First Name"),
            lastName: joi.string().required().label("Last Name"),
            email: joi.string().required().label("E-Mail"),
            password: joi.string().required().label("Password"),
            cPassword: joi.string().required().label("Conform Password"),
        });
        return schema.validate(data)
    };
    module.exports={Seller_User,validate}