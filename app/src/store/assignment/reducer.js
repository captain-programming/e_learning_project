import { ASSIGNMENT_CREATE, ASSIGNMENT_DELETE, ASSIGNMENT_ERROR, ASSIGNMENT_GET_ALL, ASSIGNMENT_LOADING, ASSIGNMENT_TOUST_CLEANER, ASSIGNMENT_UPDATE } from "./types";

const initial = {
  toastMessage: "",
  toastActive: false,
  toastStatus: "error",
  loading: false,
  allAssignment: {},
}

export const AssignmentsReducer = (state=initial, {type, payload}) => {
  switch(type){
    case ASSIGNMENT_LOADING: return {...state, loading: true};
    case ASSIGNMENT_ERROR: return {...state, loading: false, toastActive: true, toastMessage: payload, toastStatus: "error"}
    case ASSIGNMENT_CREATE: return {...state, loading: false, toastActive: true, toastMessage: payload, toastStatus: 'success'}
    case ASSIGNMENT_DELETE: return {...state, loading: false, toastActive: true, toastMessage: payload, toastStatus: 'success'}
    case ASSIGNMENT_UPDATE: return {...state, loading: false, toastActive: true, toastMessage: payload, toastStatus: 'success'}
    case ASSIGNMENT_GET_ALL: return {...state, loading: false, allAssignment: payload};
    case ASSIGNMENT_TOUST_CLEANER: return {...state, toastActive: false, toastMessage: "", toastStatus: "error"}
    default: return state;
  }
}