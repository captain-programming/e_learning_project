const AssignmentsModel = require("../models/assignments");

const createAssignment = async(req, res, next) => {
  try{
    const {name, assignmentType, teacher, startTimeDates, endTimeDates, branch, subject, details} = req.body;
    const {college_code} = req.headers;

    const assignment = await AssignmentsModel.create({name, assignmentType, teacher, startTimeDates, endTimeDates, branch, college_code, subject, details});
    return res.status(200).json("Assignment successfully created");
  }catch(err){
    console.log(err);
    return next(err);
  }
}

const allAssignment = async (req, res, next) => {
  try {
    const { college_code, branch } = req.headers;
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const skip = (page - 1) * limit;

    const assignment = await AssignmentsModel.find({ college_code, branch: `${branch} ` })
      .sort({ timeDates: -1 })
      .skip(skip)
      .limit(limit);

      const totalAssignment = await AssignmentsModel.countDocuments({ college_code, branch: `${branch} ` });
      const totalPages = Math.ceil(totalAssignment/ limit);
      return res.status(200).json({ assignment, totalPages });
  } catch (err) {
    console.log(err)
    return next(err);
  }
};

const deleteAssignment = async(req, res, next) => {

  try{
    const {college_code} = req.headers;
    const { id: _id } = req.params;
    const deleteAssignment = await AssignmentsModel.findByIdAndDelete({_id, college_code});
    if (!deleteAssignment) {
      throw new Error("Assignment not found");
    }
    return res.status(200).json("Assignment successfully delete");
  }catch(err){
    console.log(err); 
    return next(err);
  }
}

const updateAssignment = async(req, res, next) => {
  try{
    const {college_code} = req.headers;
    const { id: _id } = req.params;
    const {name, assignmentType, startTimeDates, endTimeDates, subject, details} = req.body;
    const update = await AssignmentsModel.findByIdAndUpdate({_id, college_code}, {name, assignmentType, startTimeDates, endTimeDates, subject, details}, { new: true });
    if (!update) {
      throw new Error("Assignment not found");
    }
    return res.status(200).json("Assignment successfully updated");
  }catch(err){
    return next(err);
  }
}

module.exports = { createAssignment, updateAssignment, deleteAssignment, allAssignment };