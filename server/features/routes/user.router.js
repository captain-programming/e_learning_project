const express = require('express');
const { signup, login } = require('../controllers/auth');

const userRouter = express.Router();

userRouter.get("/", async(req, res)=>{
  res.send("Welcome user");
})

userRouter.post("/signup", signup);
userRouter.post("/login", login);

module.exports = userRouter;