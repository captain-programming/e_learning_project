const UserModel = require("../models/user.model");

const usersList = async(req, res) => {
  const {college_email, role, department} = req.headers;
  try{
    let list = [];
    if(role==="Super Admin"){
      list = await UserModel.find({college_email})
    }else if(role==="Admin"){
      list = await UserModel.find({college_email, department})
    }

    res.status(200).json(list);
  }catch(err){
    console.log(err);
    res.status(500).send("Something went wrong");
  }
}

module.exports = {usersList}