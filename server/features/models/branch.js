const { Schema, model, connection } = require("mongoose");
const autoIncrement = require('mongoose-auto-increment');

const connect = connection;
autoIncrement.initialize(connect);

const BranchSchema = new Schema({
  branch_name: {type: String, required: true},
  description: {type: String, required: true},
  subjects: {type: Array, required: true},
  college_code: {type: String, required: true},
})

BranchSchema.plugin(autoIncrement.plugin, {
  model: 'BranchModel',
  field: 'branch_id',
  startAt: 1,
  incrementBy: 1,
})

const BrachModel = model("branches", BranchSchema);

module.exports = BrachModel;