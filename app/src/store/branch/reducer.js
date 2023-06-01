import { BRANCH_CREATE, BRANCH_DELETE, BRANCH_ERROR, BRANCH_GET_All, BRANCH_LOADING, BRANCH_SINGLE_DETAILS, BRANCH_TOUST_CLEANER, BRANCH_UPDATE } from "./types";

const initial = {
  toastMessage: "",
  toastActive: false,
  toastStatus: "error",
  loading: false,
  branches: [],
  singleBranch: {},
}

export const BranchReducer = (state=initial, {type, payload}) => {
  switch(type){
    case BRANCH_LOADING: return {...state, loading: true};
    case BRANCH_ERROR: return {...state, loading: false, toastActive: true, toastMessage: payload, toastStatus: "error"}
    case BRANCH_CREATE: return {...state, loading: false, toastActive: true, toastMessage: payload, toastStatus: 'success'}
    case BRANCH_DELETE: return {...state, loading: false, toastActive: true, toastMessage: payload, toastStatus: 'success'}
    case BRANCH_UPDATE: return {...state, loading: false, toastActive: true, toastMessage: payload, toastStatus: 'success'}
    case BRANCH_GET_All: return {...state, loading: false, branches: payload};
    case BRANCH_SINGLE_DETAILS: return {...state, loading: false, singleBranch: payload};
    case BRANCH_TOUST_CLEANER: return {...state, toastActive: false, toastMessage: "", toastStatus: "error"}
    default: return state;
  }
}