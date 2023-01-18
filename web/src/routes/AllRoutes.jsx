import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AskQuestions from "../pages/AskQuestions";
import Assignments from "../pages/Assignments";
import Blog from "../pages/Blog";
import Courses from "../pages/Courses";
import Lectures from "../pages/Lectures";
import Repos from "../pages/Repos";
import Submissions from "../pages/Submissions";
import Visuals from "../pages/Visuals";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/lectures" element={<Lectures />} />
        <Route path="/Assignments" element={<Assignments />} />
        <Route path="/Submissions" element={<Submissions />} />
        <Route path="/repos" element={<Repos />} />
        <Route path="/visuals" element={<Visuals />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/ask_question" element={<AskQuestions />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
