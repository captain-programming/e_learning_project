const { Router } = require("express");
const { createCourse, allCourse, deleteCourse, updateCourse } = require("../controllers/courses");

const courseRouter = Router();

courseRouter.post("/create", createCourse);
courseRouter.get("/all-course", allCourse);
courseRouter.delete("/delete/:id", deleteCourse);
courseRouter.patch("/update/:id", updateCourse);

module.exports = courseRouter;