const express = require('express');
const { signup, login, verifyOtp, adminCreateUserAccount} = require('../controllers/auth');
const { usersList, deleteUserAccount, editUserAccount } = require("../controllers/users");

const userRouter = express.Router();

userRouter.get("/", async(req, res)=>{
  res.send("Welcome user");
})

userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.post("/verify-otp", verifyOtp);
userRouter.post("/users", usersList)
userRouter.post("/create-student", adminCreateUserAccount)
userRouter.delete("/delete-student/:id", deleteUserAccount)
userRouter.patch("/edit-student/:id", editUserAccount)

module.exports = userRouter;