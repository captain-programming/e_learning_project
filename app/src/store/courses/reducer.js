import { COURSE_CREATE, COURSE_DELETE, COURSE_ERROR, COURSE_GET_ALL, COURSE_LOADING, COURSE_TOUST_CLEANER, COURSE_UPDATE } from "./types";

const initial = {
  toastMessage: "",
  toastActive: false,
  toastStatus: "error",
  loading: false,
  course: [],
}

export const CourseReducer = (state=initial, {type, payload}) => {
  switch(type){
    case COURSE_LOADING: return {...state, loading: true};
    case COURSE_ERROR: return {...state, loading: false, toastActive: true, toastMessage: payload, toastStatus: "error"}
    case COURSE_CREATE: return {...state, loading: false, toastActive: true, toastMessage: payload, toastStatus: 'success'}
    case COURSE_DELETE: return {...state, loading: false, toastActive: true, toastMessage: payload, toastStatus: 'success'}
    case COURSE_UPDATE: return {...state, loading: false, toastActive: true, toastMessage: payload, toastStatus: 'success'}
    case COURSE_GET_ALL: return {...state, loading: false, course: payload};
    case COURSE_TOUST_CLEANER: return {...state, toastActive: false, toastMessage: "", toastStatus: "error"}
    default: return state;
  }
}