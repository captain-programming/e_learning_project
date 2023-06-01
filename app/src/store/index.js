import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { AuthReducer } from "./Auth/reducer";
import { BranchReducer } from "./branch/reducer";
import { CourseReducer } from "./courses/reducer";
import { LectureReducer } from "./lecture/reducer";
import { AssignmentsReducer } from "./assignment/reducer";

const root = combineReducers({
  authuntication: AuthReducer,
  branch: BranchReducer,
  course: CourseReducer,
  lecture: LectureReducer,
  assignment: AssignmentsReducer
});

export const store = legacy_createStore(root, applyMiddleware(compose(thunk)));