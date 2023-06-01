const { Schema, model } = require("mongoose");

const AssignmentsSchema = new Schema({
  name: {type: String, required: true},
  assignmentType: {type: String, required: true},
  subject: {type: String, required: true},
  teacher: {type: String, required: true},
  startTimeDates: {type: String, required: true},
  endTimeDates: {type: String, required: true},
  college_code: {type: String, required: true},
  branch: {type: String, required: true},
  details: {type: String}
})

const AssignmentsModel = model("assignments", AssignmentsSchema);

module.exports = AssignmentsModel;