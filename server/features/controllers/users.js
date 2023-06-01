const UserModel = require("../models/user");

const usersList = async(req, res, next) => {
  const {role, collegeCode, branch} = req.body;
  try{
    if(role==="Super Admin"){
      let list = await UserModel.find({college_code: collegeCode})
      return res.status(200).json(list);
    }

    if(role==="Admin"){
      let list = await UserModel.find({collegeCode, branch, role: { $in: ['Admin', 'Instructor', 'Student'] }})
      return res.status(200).json(list);
    }
    return res.status(200).json("No access");
  }catch(err){
    return next(err);
  }
}

//deleteuser
const deleteUserAccount = async (req, res, next) => {
  const { id: _id } = req.params;

  try {
    const existingUser = await UserModel.findById(_id);
    if (!existingUser) {
      throw new Error("User don't Exist.");
    }

    // Check if user is primary and delete only if not Super Admin
    if(existingUser.primary && existingUser.role === 'Super Admin') {
      throw new Error('Cannot delete primary admin');
    }

    const deleteUser = await UserModel.findByIdAndDelete(_id);
    return res.status(200).json('Successfully Deleted');
  } catch (err) {
    return next(err);
  }
};

//edit user
const editUserAccount = async (req, res, next) => {
  const { id: _id } = req.params;
  const {name, mobile_no, role} = req.body;

  try {
    const existingUser = await UserModel.findById(_id);
    if (!existingUser) {
      throw new Error("User don't Exist.");
    }

    // Check if user is primary and update only if not Super Admin
    if(existingUser.primary && existingUser.role === 'Super Admin' && role!=='Super Admin') {
      throw new Error('Cannot change access primary admin');
    }

    const updateUser = await UserModel.findByIdAndUpdate(_id, {name, mobile_no, role});
    return res.status(200).json('Successfully updated');
  } catch (err) {
    return next(err);
  }
};

module.exports = {usersList, deleteUserAccount, editUserAccount}