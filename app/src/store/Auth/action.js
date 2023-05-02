import * as api from "../../API";
import { AUTH_USER_EMAIL_VERIFY, AUTH_USER_LOGIN, AUTH_USER_LOGOUT, AUTH_USER_SIGNUP, CREATE_ACCOUNT_ADMIN, ERROR, LOADING, TOAST_CLEANER } from "./types";

//login user account
export const userLogin = (crds) => async(dispatch)=>{
  try{
    let data = await api.loginApi(crds);
    if(data?.status===200){
      dispatch({type: AUTH_USER_LOGIN, payload: data?.data})
    };
  }catch(err){
    dispatch({type: ERROR, payload: err.response.data || err?.message})
  }
}


//create user account
export const userSignup = (crds, fun) => async(dispatch)=>{
  dispatch({type: LOADING})
  try{
    let data = await api.signupApi(crds);
    if(data?.status===200){
      fun.setStep(1);
      fun.setFormData({name: "", email: "", mobile_no: "", username: "", password: ""});
      fun.setConfirmPassword("");
      fun.verifyEmail();
      dispatch({type: AUTH_USER_SIGNUP, payload: data?.data});
    };
  }catch(err){
    console.log(err, "signup");
    dispatch({type: ERROR, payload: err.response.data || err?.message})
  }
}

//verify user email account
export const verifyUserAccount = (crds, loginFun) => async(dispatch)=>{
  dispatch({type: LOADING})
  try{
    let data = await api.verifyEmail(crds);
    if(data?.status===200){
      dispatch({type: AUTH_USER_EMAIL_VERIFY, payload: data?.data});
      loginFun();
    };
  }catch(err){
    dispatch({type: ERROR, payload: err.response.data || err?.message})
  }
}

//logout user
export const userLogout = () => async(dispatch)=>{
  dispatch({type: AUTH_USER_LOGOUT});
}


//create student account
export const adminCreateUser = (crds, fun) => async(dispatch)=>{
  dispatch({type: LOADING})
  try{
    let data = await api.createStudent(crds);
    if(data?.status===200){
      fun.setFormData({name: "", email: "", mobile_no: ""});
      dispatch({type: CREATE_ACCOUNT_ADMIN, payload: data?.data})
    };
  }catch(err){
    dispatch({type: ERROR, payload: err.response.data || err?.message})
  }
}

//cleare all error and tost
export const ToastCleaner = () => async(dispatch)=>{
  dispatch({type: TOAST_CLEANER})
}