import * as api from "../../API";
import { BRANCH_CREATE, BRANCH_DELETE, BRANCH_ERROR, BRANCH_GET_All, BRANCH_LOADING, BRANCH_SINGLE_DETAILS, BRANCH_TOUST_CLEANER, BRANCH_UPDATE } from "./types";

export const createBranchAction = (crds, fun, college_code) => async(dispatch) => {
  dispatch({type: BRANCH_LOADING});
  try{
    let data = await api.createBranch(crds, college_code);
    if(data?.status===200){
      dispatch({type: BRANCH_CREATE, payload: data?.data})
      fun.setFormData({branch_name: "", description: "", subjects: [], cover_image: ''});
    };
  }catch(err){
    dispatch({type: BRANCH_ERROR, payload: err.response.data || err?.message})
  }
}

export const getAllBranchAction = (college_code) => async(dispatch) => {
  dispatch({type: BRANCH_LOADING});
  try{
    let data = await api.getAllBranch(college_code);
    if(data?.status===200){
      dispatch({type: BRANCH_GET_All, payload: data?.data})
    };
  }catch(err){
    dispatch({type: BRANCH_ERROR, payload: err.response.data || err?.message})
  }
}

export const SingleBranchDetailsAction = (college_code, branch_name) => async(dispatch) => {
  dispatch({type: BRANCH_LOADING});
  try{
    let data = await api.singleBranchDetails(college_code, branch_name);
    if(data?.status===200){
      dispatch({type: BRANCH_SINGLE_DETAILS, payload: data?.data})
    };
  }catch(err){
    dispatch({type: BRANCH_ERROR, payload: err.response.data || err?.message})
  }
}

export const deleteBranchAction = (college_code, id) => async(dispatch) => {
  dispatch({type: BRANCH_LOADING});
  try{
    let data = await api.deleteBranch(college_code, id);
    if(data?.status===200){
      dispatch({type: BRANCH_DELETE, payload: data?.data})
    };
  }catch(err){
    dispatch({type: BRANCH_ERROR, payload: err.response.data || err?.message})
  }
}

export const updateBranchAction = (college_code, id, crds, closeForm) => async(dispatch) => {
  dispatch({type: BRANCH_LOADING});
  try{
    let data = await api.updateBranch(college_code, id, crds);
    if(data?.status===200){
      dispatch({type: BRANCH_UPDATE, payload: data?.data})
      closeForm();
    };
  }catch(err){
    dispatch({type: BRANCH_ERROR, payload: err.response.data || err?.message})
  }
}

//cleare all error and tost
export const branchToastCleaner = () => async(dispatch)=>{
  dispatch({type: BRANCH_TOUST_CLEANER})
}