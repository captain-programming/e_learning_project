const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  email: {type: String, required: true, unique: false},
  username: {type: String, required: true, unique: false},
  password: {type: String, required: true},
  name: {type: String, required: true},
  mobile_no: {type: String, required: true},
  role: {type: String, required: true, default: "Super Admin"},
  college_code: {type: String, required: true},
  verify: {type: Boolean, required: true},
  otp: {type: String},
  primary: {type: Boolean, required: true, default: true},
  branch: { type: String }
})

const UserModel = model('users', UserSchema);
module.exports=UserModel;