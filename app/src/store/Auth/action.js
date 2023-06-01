import * as api from "../../API";
import { AUTH_USER_EMAIL_VERIFY, AUTH_USER_LOGIN, AUTH_USER_LOGOUT, AUTH_USER_SEND_OTP, AUTH_USER_SIGNUP, AUTH_USER_UPDATE_PASSWORD, CREATE_ACCOUNT_ADMIN, DELETE_USER_ACCOUNT, EDIT_USER_ACCOUNT, ERROR, GET_ALL_USER, LOADING, TOAST_CLEANER } from "./types";

//login user account
export const userLogin = (crds, verifyUser) => async(dispatch)=>{
  try{
    let data = await api.loginApi(crds);
    if(data?.status===200 && data.data!=="Verify User"){
      dispatch({type: AUTH_USER_LOGIN, payload: data?.data})
    };
    if(data.data==="Verify User"){
      verifyUser();
    }
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
export const adminCreateUser = (crds, fun, userDetails) => async(dispatch)=>{
  dispatch({type: LOADING})
  try{
    let data = await api.createStudent(crds);
    if(data?.status===200){
      fun.setFormData({name: "", email: "", mobile_no: ""});
      dispatch({type: CREATE_ACCOUNT_ADMIN, payload: data?.data})
    };
    dispatch(getAllUser({role: userDetails?.role, collegeCode: userDetails?.college_code, branch: userDetails?.branch}))
  }catch(err){
    dispatch({type: ERROR, payload: err.response.data || err?.message})
  }
}

//get all user
export const getAllUser = (crds) => async(dispatch)=>{
  dispatch({type: LOADING})
  try{
    let data = await api.getAllUser(crds);
    if(data?.status===200){
      dispatch({type: GET_ALL_USER, payload: data?.data});
    };
  }catch(err){
    dispatch({type: ERROR, payload: err.response.data || err?.message})
  }
}

//delete user
export const deleteUser = (id, userDetails) => async(dispatch)=>{
  dispatch({type: LOADING});
  try{
    let data = await api.deleteUser(id)
    if(data?.status===200){
      dispatch({type: DELETE_USER_ACCOUNT, payload: data?.data});
    }
    dispatch(getAllUser({role: userDetails?.role, collegeCode: userDetails?.college_code, branch: userDetails?.branch}))
  }catch(err){
    dispatch({type: ERROR, payload: err.response.data || err?.message})
  }
}

//edit user
export const editUser = (id, details, userDetails) => async(dispatch)=>{
  dispatch({type: LOADING});
  try{
    let data = await api.editUser(id, details)
    if(data?.status===200){
      dispatch({type: EDIT_USER_ACCOUNT, payload: data?.data});
    }
    dispatch(getAllUser({role: userDetails?.role, collegeCode: userDetails?.college_code, branch: userDetails?.branch}))
  }catch(err){
    dispatch({type: ERROR, payload: err.response.data || err?.message})
  }
}

//cleare all error and tost
export const ToastCleaner = () => async(dispatch)=>{
  dispatch({type: TOAST_CLEANER})
}

//send otp in email

export const sendOtpAction = (email) => async(dispatch) => {
  dispatch({type: LOADING});
  try{
    let data = await api.sendOtp(email)
    if(data?.status===200){
      dispatch({type: AUTH_USER_SEND_OTP, payload: data?.data});
    }
  }catch(err){
    dispatch({type: ERROR, payload: err.response.data || err?.message || err?.ReferenceError})
  }
}

export const updatePasswordAction = (email, password, loginFun) => async(dispatch) => {
  dispatch({type: LOADING});
  try{
    let data = await api.updatePassword(email, password)
    if(data?.status===200){
      dispatch({type: AUTH_USER_UPDATE_PASSWORD, payload: data?.data});
      loginFun();
    }
  }catch(err){
    dispatch({type: ERROR, payload: err.response.data || err?.message || err?.ReferenceError})
  }
}