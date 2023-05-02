const UserModel =  require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { sendMail } = require("./sendMail");

const generatePassword = (length)=>{
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]|;:<>,.?/';
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

//create user account
const signup = async (req, res, next) => {
  const { email, mobile_no, name, password } = req.body;
  try {
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      throw new Error("User already exists.");
    }

    // Generate a random 6-digit number
    let  college_code = "";
    do {
      college_code = Math.floor(100000 + Math.random() * 900000).toString();
    } while (await UserModel.findOne({  college_code:  college_code }));

    //Generate a random username
    let username = "";
    let initalName = name.trim().split(" ")[0];
    do {
      username = initalName + Math.floor(100000 + Math.random() * 900000).toString();
    } while (await UserModel.findOne({ username: username }));

    const hashedPassword = await bcrypt.hash(password, 12);

    //email send process
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const emailText = `
                      <p>Hello ${name},</p>
                      <p>Thank you for registering on our app.</p>
                      <p>Your OTP for registration on our app is:</p>
                      <h1>${otp}</h1>
                      <p>If you did not register on our app, please ignore this email.</p>

                      <p><b>Email: ${email}</b></p>
                      <p><b>Username: ${username}</b></p>
                    `
    await sendMail(emailText, email);

    //save data in database
    const newUser = await UserModel.create({
      name,
      email,
      mobile_no,
      password: hashedPassword,
      username: username,
      college_code:  college_code,
      verify: false,
      otp: otp
    });

    return res.status(200).json("Account is successfully created");
  } catch (error) {
    return next(error);
  }
};


//create student account
const adminCreateUserAccount = async (req, res, next) => {
  const { email, mobile_no, name, role, collegeCode} = req.body;
  
  try {
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      throw new Error("User already exists.");
    }

    //Generate a random username
    let username = "";
    let initalName = name.trim().split(" ")[0];
    do {
      username = initalName + Math.floor(100000 + Math.random() * 900000).toString();
    } while (await UserModel.findOne({ username: username }));

    const password = generatePassword(12);

    const hashedPassword = await bcrypt.hash(password, 12);

    //email send process
    const emailText = `
                      <p>Hello ${name},</p>
                      <p>Your adminision successfully. Use following details to login.</p>

                      <p><b>Email: ${email}</b></p>
                      <p><b>Username: ${username}</b></p>
                      <p><b>Password: ${password}</b></p>
                    `
    await sendMail(emailText, email);

    //save data in database
    const newUser = await UserModel.create({
      name,
      email,
      mobile_no,
      password: hashedPassword,
      username: username,
      college_code:  collegeCode,
      verify: false,
      role: role
    });

    return res.status(200).json("Account is successfully created");
  } catch (error) {
    return next(error);
  }
};

//login user account
const login = async(req, res, next)=>{
  const {email, password} = req.body;
  try{
    const existingUser = await UserModel.findOne({email});
    if(!existingUser){
      throw new Error("User don't Exist.");
    }
    const isPasswordCrt = await bcrypt.compare(password, existingUser.password)
    if(!isPasswordCrt){
      throw new Error("Invalid credentials");
    }
    const token = jwt.sign({email: existingUser.email, id: existingUser._id}, "e learning", {expiresIn: '1h'});
    return res.status(200).json({token: token, message: "Login Successfully", userDetails: existingUser});
  }catch(err){
    return next(err);
  }
}

//verify user email
const verifyOtp = async(req, res, next) =>{
  const {otp, email} = req.body;

  try{
    const existingUser = await UserModel.findOne({email});
    if(!existingUser){
      throw new Error("User don't Exist.");
    }

    const verify = await UserModel.findOne({email, otp});
    if(!verify){
      throw new Error("OTP is expired. Please resend otp");
    }

    const updateVerify = await UserModel.findByIdAndUpdate(existingUser._id, {verify: true});

    return res.status(200).json("Account is successfully verified");
  }catch(err){
    return next(err);
  }
}

module.exports = {signup, login, verifyOtp, adminCreateUserAccount}