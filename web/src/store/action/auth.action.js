import { AUTH_LOADING, AUTH_LOGIN, AUTH_LOGOUT, AUTH_SIGNUP } from "../types/auth.types";
import * as api from "../../api";

export const loginFun = (creds, navigate) => async(dispatch)=>{
  dispatch({type: AUTH_LOADING});
  try{
    let {data} = api.loginApi(creds);
    dispatch({type: AUTH_LOGIN, payload: data});
    navigate('/');
  }catch(err){
    console.log(err);
  }
}

export const signupFun = (creds, navigate) => async(dispatch)=>{
  dispatch({type: AUTH_LOADING});
  try{
    let {data} = await api.signupApi(creds);
    dispatch({type: AUTH_SIGNUP, payload: data});
    navigate("/login");
  }catch(err){
    console.log(err);
  }
}

export const logoutFun = () => async(dispatch)=>{
  dispatch({type: AUTH_LOGOUT});
}