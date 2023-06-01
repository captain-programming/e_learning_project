const LecturesModel = require("../models/lectures");


const createLecture = async(req, res, next) => {
  try{
    const {name, lectureMode, teacher, timeDates, lectureLink, branch, subject, details} = req.body;
    const {college_code} = req.headers;

    const lecture = await LecturesModel.create({name, lectureMode, teacher, timeDates, lectureLink, branch, college_code, subject, details});
    return res.status(200).json("Lecture successfully created");
  }catch(err){
    console.log(err);
    return next(err);
  }
}

const allLecture = async (req, res, next) => {
  try {
    const { college_code, branch } = req.headers;
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const skip = (page - 1) * limit;

    const lectures = await LecturesModel.find({ college_code, branch: `${branch} ` })
      .sort({ timeDates: -1 })
      .skip(skip)
      .limit(limit);

      const totalLectures = await LecturesModel.countDocuments({ college_code, branch: `${branch} ` });
      const totalPages = Math.ceil(totalLectures / limit);
      return res.status(200).json({ lectures, totalPages });
  } catch (err) {
    return next(err);
  }
};

const deleteLecture = async(req, res, next) => {

  try{
    const {college_code} = req.headers;
    const { id: _id } = req.params;
    const deleteLecture = await LecturesModel.findByIdAndDelete({_id, college_code});
    if (!deleteLecture) {
      throw new Error("Lecture not found");
    }
    return res.status(200).json("Lecture successfully delete");
  }catch(err){
    console.log(err); 
    return next(err);
  }
}

const updateLecture = async(req, res, next) => {
  try{
    const {college_code} = req.headers;
    const { id: _id } = req.params;
    const {name, lectureMode, teacher, timeDates, lectureLink} = req.body;
    const update = await LecturesModel.findByIdAndUpdate({_id, college_code}, {name, lectureMode, teacher, timeDates, lectureLink}, { new: true });
    if (!update) {
      throw new Error("Lecture not found");
    }
    return res.status(200).json("Lecture successfully updated");
  }catch(err){
    return next(err);
  }
}

module.exports = { createLecture, updateLecture, deleteLecture, allLecture };