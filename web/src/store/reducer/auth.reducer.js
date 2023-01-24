import { AUTH_LOADING, AUTH_LOGIN, AUTH_LOGOUT, AUTH_SIGNUP } from "../types/auth.types";

const initalValue = {
  loading: false,
  signup: "Something wrong",
  login: {
    token: null,
    status: "Check Creditional details"
  },
  logout: "Logout failed",
}

export const AuthReducer = (state=initalValue, {type, payload}) =>{
  switch(type){
    case AUTH_LOADING: return {...state, loading: true};
    case AUTH_LOGIN: return {...state, loading: false, login: payload};
    case AUTH_LOGOUT: return {...state, logout: "Logout Success", login: {token: null}};
    case AUTH_SIGNUP: return {...state, loading: false, signup: payload};
    default: return state;
  }
}