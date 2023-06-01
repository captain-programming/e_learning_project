import * as api from "../../API";
import { LECTURE_CREATE, LECTURE_DELETE, LECTURE_ERROR, LECTURE_GET_ALL, LECTURE_LOADING, LECTURE_TOUST_CLEANER, LECTURE_UPDATE } from "./types";

export const createLectureAction = (crds, fun, college_code) => async(dispatch) => {
  dispatch({type: LECTURE_LOADING});
  try{
    let data = await api.createLectures(crds, college_code);
    if(data?.status===200){
      dispatch({type: LECTURE_CREATE, payload: data?.data})
      fun.closeForm();
      fun.clearData();
    };
  }catch(err){
    dispatch({type: LECTURE_ERROR, payload: err.response.data || err?.message})
  }
}

export const getAllLectureAction = (obj, params) => async(dispatch) => {
  dispatch({type: LECTURE_LOADING});
  try{
    let data = await api.getAllLectures(obj, params);
    if(data?.status===200){
      dispatch({type: LECTURE_GET_ALL, payload: data?.data})
    };
  }catch(err){
    dispatch({type: LECTURE_ERROR, payload: err.response.data || err?.message})
  }
}

export const deleteLectureAction = (college_code, id, fun) => async(dispatch) => {

  dispatch({type: LECTURE_LOADING});
  try{
    let data = await api.deletedLectures(college_code, id);
    if(data?.status===200){
      dispatch({type: LECTURE_DELETE, payload: data?.data})
      fun();
    };
  }catch(err){
    dispatch({type: LECTURE_ERROR, payload: err.response.data || err?.message})
  }
}

export const updateLectureAction = (college_code, id, crds, closeForm) => async(dispatch) => {
  dispatch({type: LECTURE_LOADING});
  try{
    let data = await api.updateLectures(college_code, id, crds);
    if(data?.status===200){
      dispatch({type: LECTURE_UPDATE, payload: data?.data})
      closeForm();
    };
  }catch(err){
    dispatch({type: LECTURE_ERROR, payload: err.response.data || err?.message})
  }
}

//clear all error and tost
export const LectureToastCleaner = () => async(dispatch)=>{
  dispatch({type: LECTURE_TOUST_CLEANER})
}