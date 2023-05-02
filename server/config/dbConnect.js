require("dotenv").config();

const { default: mongoose } = require("mongoose")
// const databaseUrl = "mongodb+srv://dinesh103:dinesh103DINESH103@cluster0.3pvw9hk.mongodb.net/e-learning?retryWrites=true&w=majority";

const dbConnect = () =>{
  return mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});
}

module.exports=dbConnect;