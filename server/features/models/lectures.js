const { Schema, model } = require("mongoose");

const LecturesSchema = new Schema({
  name: {type: String, required: true},
  lectureMode: {type: String, required: true},
  subject: {type: String, required: true},
  teacher: {type: String, required: true},
  timeDates: {type: String, required: true},
  college_code: {type: String, required: true},
  lectureLink: {type: String},
  branch: {type: String, required: true},
  details: {type: String}
})

const LecturesModel = model("lectures", LecturesSchema);

module.exports = LecturesModel;