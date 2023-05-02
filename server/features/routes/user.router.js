const express = require('express');
const { signup, login, verifyOtp, adminCreateUserAccount} = require('../controllers/auth');
const { usersList } = require("../controllers/users");

const userRouter = express.Router();

userRouter.get("/", async(req, res)=>{
  res.send("Welcome user");
})

userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.post("/verify-otp", verifyOtp);
userRouter.get("/users", usersList)
userRouter.post("/create-student", adminCreateUserAccount)

module.exports = userRouter;