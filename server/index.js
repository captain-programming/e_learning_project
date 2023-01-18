const express = require('express');
const dbConnect = require("./config/dbConnect");
const cors = require("cors");
const userRouter = require('./features/routes/user.router');

const app = express();
app.use(cors());
app.use((express.urlencoded({extended: true})));
app.use(express.json());
app.get("/", (req, res) => res.send("Welcome E-Learning Platform"));
app.use("/users", userRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, async() => {
  await dbConnect();
  console.log(`server started on port ${PORT}`);
})