const { Schema, model } = require("mongoose");

const CourseSchema = new Schema({
  course_name: {type: String, required: true},
  description: {type: String, required: true},
  price: {type: Number, required: true},
  duration: {type: Number, required: true},
  batch_size: {type: Number, required: true},
  college_code: {type: String, required: true},
  branch: {type: String, required: true}
})

const CourseModel = model("courses", CourseSchema);

module.exports = CourseModel;