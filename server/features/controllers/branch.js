const BrachModel = require("../models/branch");

const createBranch = async(req, res, next) => {
  try{
    const {branch_name, description, subjects} = req.body;
    const {college_code} = req.headers;

    const branch = await BrachModel.create({branch_name, description, subjects, college_code});
    return res.status(200).json("Branch successfully created");
  }catch(err){
    return next(err);
  }
}

const allBranch = async(req, res, next) => {
  try{
    const {college_code} = req.headers;
    const branch = await BrachModel.find({college_code});
    return res.status(200).json(branch);
  }catch(err){
    return next(err);
  }
}

const singleBranchDetails = async(req, res, next) => {
  const {college_code, branch_name} = req.headers;
  try{
    const singleBranch = await BrachModel.findOne({college_code, branch_name: `${branch_name} `})
    return res.status(200).json(singleBranch);
  }catch(err){
    return next(err);
  }
}

const deleteBranch = async(req, res, next) => {
  try{
    const {college_code} = req.headers;
    const { id: _id } = req.params;
    const deleteBranch = await BrachModel.findByIdAndDelete({_id, college_code});
    if (!deleteBranch) {
      throw new Error("Branch not found");
    }
    return res.status(200).json("Branch successfully delete");
  }catch(err){
    return next(err);
  }
}

const updateBranch = async(req, res, next) => {
  try{
    const {college_code} = req.headers;
    const { id: _id } = req.params;
    const {branch_name, description, subjects} =req.body;
    const updateBranch = await BrachModel.findByIdAndUpdate({_id, college_code}, {branch_name, description, subjects}, { new: true });
    if (!updateBranch) {
      throw new Error("Branch not found");
    }
    return res.status(200).json("Branch successfully updated");
  }catch(err){
    console.log(err);
    return next(err);
  }
}

module.exports = { createBranch, allBranch, deleteBranch, updateBranch, singleBranchDetails };