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
import PrivateRoute from "../context/PrivateRoute";
import Profile from "../pages/Profile";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/courses"
          element={
            <PrivateRoute>
              <Courses />
            </PrivateRoute>
          }
        />
        <Route
          path="/lectures"
          element={
            <PrivateRoute>
              <Lectures />
            </PrivateRoute>
          }
        />
        <Route
          path="/Assignments"
          element={
            <PrivateRoute>
              <Assignments />
            </PrivateRoute>
          }
        />
        <Route
          path="/Submissions"
          element={
            <PrivateRoute>
              <Submissions />
            </PrivateRoute>
          }
        />
        <Route
          path="/repos"
          element={
            <PrivateRoute>
              <Repos />
            </PrivateRoute>
          }
        />
        <Route
          path="/visuals"
          element={
            <PrivateRoute>
              <Visuals />
            </PrivateRoute>
          }
        />
        <Route
          path="/blogs"
          element={
            <PrivateRoute>
              <Blog />
            </PrivateRoute>
          }
        />
        <Route
          path="/ask_questions"
          element={
            <PrivateRoute>
              <AskQuestions />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

export default AllRoutes;
