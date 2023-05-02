import { AUTH_USER_EMAIL_VERIFY, AUTH_USER_LOGIN, AUTH_USER_LOGOUT, AUTH_USER_SIGNUP, CREATE_ACCOUNT_ADMIN, ERROR, LOADING, TOAST_CLEANER } from "./types";

const initial = {
  login: false,
  token: "",
  userDetails: "",
  signup: false,
  loading: false,
  toastMessage: "",
  toastActivate: false,
  toastStatus: "error"
}

export const AuthReducer = (state=initial, {type, payload})=>{
  switch(type){
    case LOADING : return { ...state, loading: true }
    case ERROR : return { ...state, loading: false, toastActivate: true, toastMessage: payload, toastStatus: "error"}
    case AUTH_USER_LOGIN : return { ...state, login: true, loading: false, toastActivate: true, toastMessage: payload?.message, toastStatus: "success", userDetails: payload?.userDetails, token: payload?.token}
    case AUTH_USER_SIGNUP : return { ...state, signup: true, loading: false}
    case CREATE_ACCOUNT_ADMIN : return { ...state, signup: true, loading: false, toastActivate: true, toastMessage: payload, toastStatus: "success"}
    case AUTH_USER_EMAIL_VERIFY : return { ...state, loading: false, toastMessage: payload, toastActivate: true, toastStatus: "success"}
    case TOAST_CLEANER : return {...state, toastMessage: "", toastActivate: false, toastStatus: "error"}
    case AUTH_USER_LOGOUT: return {...state, toastMessage: "Successfully logout", toastActivate: true, token: "", login: false, userDetails: "", toastStatus: "success"}
    default: return state;
  }
}