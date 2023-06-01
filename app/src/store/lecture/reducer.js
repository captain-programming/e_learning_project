import { LECTURE_CREATE, LECTURE_DELETE, LECTURE_ERROR, LECTURE_GET_ALL, LECTURE_LOADING, LECTURE_TOUST_CLEANER, LECTURE_UPDATE } from "./types";

const initial = {
  toastMessage: "",
  toastActive: false,
  toastStatus: "error",
  loading: false,
  lectures: {},
}

export const LectureReducer = (state=initial, {type, payload}) => {
  switch(type){
    case LECTURE_LOADING: return {...state, loading: true};
    case LECTURE_ERROR: return {...state, loading: false, toastActive: true, toastMessage: payload, toastStatus: "error"}
    case LECTURE_CREATE: return {...state, loading: false, toastActive: true, toastMessage: payload, toastStatus: 'success'}
    case LECTURE_DELETE: return {...state, loading: false, toastActive: true, toastMessage: payload, toastStatus: 'success'}
    case LECTURE_UPDATE: return {...state, loading: false, toastActive: true, toastMessage: payload, toastStatus: 'success'}
    case LECTURE_GET_ALL: return {...state, loading: false, lectures: payload};
    case LECTURE_TOUST_CLEANER: return {...state, toastActive: false, toastMessage: "", toastStatus: "error"}
    default: return state;
  }
}