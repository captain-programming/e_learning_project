import * as api from "../../API";
import { COURSE_CREATE, COURSE_DELETE, COURSE_ERROR, COURSE_GET_ALL, COURSE_LOADING, COURSE_TOUST_CLEANER, COURSE_UPDATE } from "./types";

export const createCourseAction = (crds, fun, college_code) => async(dispatch) => {
  dispatch({type: COURSE_LOADING});
  try{
    let data = await api.createCourse(crds, college_code);
    if(data?.status===200){
      dispatch({type: COURSE_CREATE, payload: data?.data})
      fun.setFormData({course_name: "", description: "", course_image: "", price: "", duration: "", batch_size: ""});
      fun.closeForm();
    };
  }catch(err){
    dispatch({type: COURSE_ERROR, payload: err.response.data || err?.message})
  }
}

export const getAllCourseAction = (obj) => async(dispatch) => {
  dispatch({type: COURSE_LOADING});
  try{
    let data = await api.getAllCourse(obj);
    if(data?.status===200){
      dispatch({type: COURSE_GET_ALL, payload: data?.data})
    };
  }catch(err){
    dispatch({type: COURSE_ERROR, payload: err.response.data || err?.message})
  }
}

export const deleteCourseAction = (college_code, id, fun) => async(dispatch) => {
  dispatch({type: COURSE_LOADING});
  try{
    let data = await api.deletedCourse(college_code, id);
    if(data?.status===200){
      dispatch({type: COURSE_DELETE, payload: data?.data})
      fun();
    };
  }catch(err){
    dispatch({type: COURSE_ERROR, payload: err.response.data || err?.message})
  }
}

export const updateCourseAction = (college_code, id, crds, closeForm) => async(dispatch) => {
  dispatch({type: COURSE_LOADING});
  try{
    let data = await api.updateCourse(college_code, id, crds);
    if(data?.status===200){
      dispatch({type: COURSE_UPDATE, payload: data?.data})
      closeForm();
    };
  }catch(err){
    dispatch({type: COURSE_ERROR, payload: err.response.data || err?.message})
  }
}

//cleare all error and tost
export const CourseToastCleaner = () => async(dispatch)=>{
  dispatch({type: COURSE_TOUST_CLEANER})
}