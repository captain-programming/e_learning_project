const UserModel =  require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const signup = async(req, res)=>{
  const {college_name, college_email, college_phone, password, admin_name, admin_phone, admin_email} = req.body;

  try{
    const existinguser = await UserModel.findOne({college_email});
    if(existinguser){
      return res.status(404).json({message: "User already Exist."})
    }
    
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await UserModel.create({college_name, college_email, college_phone, password: hashedPassword, admin_name, admin_phone, admin_email});

    const token = jwt.sign({college_email: newUser.college_email, id: newUser._id}, "secrete", {expiresIn: '1h'});

    res.status(200).json({result: newUser, token});
  }catch(err){
    console.log(err);
    res.status(500).send("Something went wrong");
  }
}

const login = async(req, res)=>{
  const {college_email, password} = req.body;
  try{
    const existinguser = await UserModel.findOne({college_email});
    if(!existinguser){
      return res.status(404).json({message: "User don't Exist."})
    }

    const isPasswordCrt = await bcrypt.compare(password, existinguser.password)
    if(!isPasswordCrt){
      return res.status(400).json({message: "Invalid credentials"})
    }

    const token = jwt.sign({email: existinguser.college_email, id: existinguser._id}, "secrete", {expiresIn: '1h'});

    res.status(200).json({result: existinguser, token})
  }catch(err){
    console.log(err);
    res.status(500).json("Something went wrong");
  }
}

module.exports = {signup, login}