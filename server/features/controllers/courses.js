const CourseModel = require("../models/courses");


const createCourse = async(req, res, next) => {
  try{
    const {course_name, description, price, duration, batch_size, branch} = req.body;
    const {college_code} = req.headers;

    const course = await CourseModel.create({course_name, description, price, duration, batch_size, college_code, branch});
    return res.status(200).json("Course successfully created");
  }catch(err){
    return next(err);
  }
}

const allCourse = async(req, res, next) => {
  try{
    const {college_code, branch} = req.headers;
    console.log(branch);
    let temp = `${branch} `
    if(branch){
      const course = await CourseModel.find({college_code, temp});
      console.log(course)
      return res.status(200).json(course);
    }else{
      const course = await CourseModel.find({college_code});
      return res.status(200).json(course);
    }
  }catch(err){
    console.log(err);
    return next(err);
  }
}

const deleteCourse = async(req, res, next) => {
  
  try{
    const {college_code} = req.headers;
    const { id: _id } = req.params;
    const deleteCourse = await CourseModel.findByIdAndDelete({_id, college_code});
    if (!deleteCourse) {
      throw new Error("Course not found");
    }
    return res.status(200).json("Course successfully delete");
  }catch(err){
    return next(err);
  }
}

const updateCourse = async(req, res, next) => {
  try{
    const {college_code} = req.headers;
    const { id: _id } = req.params;
    const {course_name, description, price, duration, batch_size} = req.body;
    const updateCourse = await CourseModel.findByIdAndUpdate({_id, college_code}, {course_name, description, duration, price, batch_size}, { new: true });
    if (!updateCourse) {
      throw new Error("Course not found");
    }
    return res.status(200).json("Course successfully updated");
  }catch(err){
    return next(err);
  }
}

module.exports = { createCourse, updateCourse, deleteCourse, allCourse };