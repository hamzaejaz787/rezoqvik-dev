const express = require("express");
const { Buyers_User, validate } = require("../models/buyer_user");
const { Seller_User } = require("../models/seller_user");
const multer = require("multer");
const joi = require("joi");

const bcrypt = require("bcrypt");
const router = express.Router();
const path = require('path');

const imgStore = multer.diskStorage({

  destination:function(req, file,cb){
    cb(null, path.join(__dirname,'../public/buyerImages'), function(err, succ){
      if(err) throw err
    });
  },
  filename:(req,file,cb)=>{
    cb(null,`imgae-${Date.now()}. ${file.originalname}`)
  }
})
  // img filter
const isImg = (req,file,callback)=>{
  if(file.mimetype.startsWith("image")){
      callback(null,true)
  }else{
      callback(new Error("only images is allowd"))
  }
}
  const upload = multer({
    storage: imgStore,
    fileFilter : isImg

  })

router.post("/",upload.single('proImg'), async (req, res) => {


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
    await new Buyers_User({
      ...req.body,
      password: hashPassword,
      cPassword: hashPassword,
    }).save();
    res.status(201).send({ message: "User Created Sccussfully" });
    console.log(imgStore.getFilename);
  } catch (error) {
    res.status(500).send({ message: error });
  }
});

module.exports = router;
