const { Router } = require("express");
const {createLecture, updateLecture, deleteLecture, allLecture} = require("../controllers/lectures");

const lectureRouter = Router();

lectureRouter.post("/create", createLecture);
lectureRouter.get("/all-lectures", allLecture);
lectureRouter.delete("/delete/:id", deleteLecture);
lectureRouter.patch("/update/:id", updateLecture);

module.exports = lectureRouter;