const { Router } = require("express");
const { createAssignment, allAssignment, deleteAssignment, updateAssignment } = require("../controllers/assignments");

const assignmentRouter = Router();

assignmentRouter.post("/create", createAssignment);
assignmentRouter.get("/all-assignments", allAssignment);
assignmentRouter.delete("/delete/:id", deleteAssignment);
assignmentRouter.patch("/update/:id", updateAssignment);

module.exports = assignmentRouter;