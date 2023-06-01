const express = require('express');
const dbConnect = require("./config/dbConnect");
const cors = require("cors");
const userRouter = require('./features/routes/user');
const errorHandler = require('./middleware/errorHandler');
const branchRouter = require('./features/routes/branch');
const courseRouter = require('./features/routes/courses');
const lectureRouter = require('./features/routes/lectures');
const assignmentRouter = require('./features/routes/assignments');

const app = express();
app.use(cors());
app.use((express.urlencoded({extended: true})));
app.use(express.json());
app.get("/", (req, res) => res.send("Welcome E-Learning Platform"));
app.use("/users", userRouter);
app.use("/branch", branchRouter);
app.use("/course", courseRouter);
app.use("/lecture", lectureRouter);
app.use("/assignment", assignmentRouter)
app.use(errorHandler);

const PORT = process.env.PORT || 8080;

app.listen(PORT, async() => {
  try{
    await dbConnect();
    console.log(`server started on port ${PORT}`);  
  }catch(err){
    if(err.message==="querySrv ECONNREFUSED _mongodb._tcp.cluster0.3pvw9hk.mongodb.net"){
      console.log("Network not connected");
    }else{
      console.log(err);
    }
  }
})