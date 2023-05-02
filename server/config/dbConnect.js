require("dotenv").config();

const { default: mongoose } = require("mongoose")

const dbConnect = () =>{
  return mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});
}

module.exports=dbConnect;