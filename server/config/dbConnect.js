const { default: mongoose } = require("mongoose")

// const databaseUrl = "mongodb+srv://dinesh103:dinesh103DINESH103@cluster0.3pvw9hk.mongodb.net/e-learning?retryWrites=true&w=majority";
const databaseUrl = "mongodb://localhost:27017/e-learning?retryWrites=true&w=majority";

const dbConnect = () =>{
  return mongoose.connect(databaseUrl, {useNewUrlParser: true, useUnifiedTopology: true});
}

module.exports=dbConnect;