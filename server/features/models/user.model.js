const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  college_name: {type: String, required: true},
  college_email: {type: String, required: true},
  college_phone: {type: String, required: true},
  password: {type: String, required: true},
  admin_name: {type: String, required: true},
  admin_phone: {type: String, required: true},
  admin_email: {type: String, required: true, unique: false},
  role: {type: String, required: true},
  

})

const UserModel = model('users', UserSchema);
module.exports=UserModel;