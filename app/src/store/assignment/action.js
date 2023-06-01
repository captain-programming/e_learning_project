import * as api from "../../API";
import { ASSIGNMENT_CREATE, ASSIGNMENT_DELETE, ASSIGNMENT_ERROR, ASSIGNMENT_GET_ALL, ASSIGNMENT_LOADING, ASSIGNMENT_TOUST_CLEANER, ASSIGNMENT_UPDATE } from "./types";

export const createAssignmentAction = (crds, fun, college_code) => async(dispatch) => {
  dispatch({type: ASSIGNMENT_LOADING});
  try{
    let data = await api.createAssignments(crds, college_code);
    if(data?.status===200){
      dispatch({type: ASSIGNMENT_CREATE, payload: data?.data})
      fun.closeForm();
      fun.clearData();
    };
  }catch(err){
    dispatch({type: ASSIGNMENT_ERROR, payload: err.response.data || err?.message})
  }
}

export const getAllAssignmentAction = (obj, params) => async(dispatch) => {
  dispatch({type: ASSIGNMENT_LOADING});
  try{
    let data = await api.getAllAssignments(obj, params);
    if(data?.status===200){
      dispatch({type: ASSIGNMENT_GET_ALL, payload: data?.data})
    };
  }catch(err){
    dispatch({type: ASSIGNMENT_ERROR, payload: err.response.data || err?.message})
  }
}

export const deleteAssignmentAction = (college_code, id, fun) => async(dispatch) => {

  dispatch({type: ASSIGNMENT_LOADING});
  try{
    let data = await api.deletedAssignments(college_code, id);
    if(data?.status===200){
      dispatch({type: ASSIGNMENT_DELETE, payload: data?.data})
      fun();
    };
  }catch(err){
    dispatch({type: ASSIGNMENT_ERROR, payload: err.response.data || err?.message})
  }
}

export const updateAssignmentAction = (college_code, id, crds, closeForm) => async(dispatch) => {
  dispatch({type: ASSIGNMENT_LOADING});
  try{
    let data = await api.updateAssignments(college_code, id, crds);
    if(data?.status===200){
      dispatch({type: ASSIGNMENT_UPDATE, payload: data?.data})
      closeForm();
    };
  }catch(err){
    dispatch({type: ASSIGNMENT_ERROR, payload: err.response.data || err?.message})
  }
}

//clear all error and tost
export const AssignmentToastCleaner = () => async(dispatch)=>{
  dispatch({type: ASSIGNMENT_TOUST_CLEANER})
}