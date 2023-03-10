import { AUTH_LOADING, AUTH_LOGIN, AUTH_LOGOUT, AUTH_SIGNUP } from "../types/auth.types";

const initalValue = {
  loading: false,
  signup: "Something wrong",
  login: {
    token: null,
    status: "Check Creditional details",
    userdetails: null
  },
  logout: "Logout failed",
  access: null,
}

export const AuthReducer = (state=initalValue, {type, payload}) =>{
  switch(type){
    case AUTH_LOADING: return {...state, loading: true};
    case AUTH_LOGIN: return {...state, loading: false, login: payload, access: payload.userdetails.role};
    case AUTH_LOGOUT: return {...state, logout: "Logout Success", login: {token: null}};
    case AUTH_SIGNUP: return {...state, loading: false, signup: payload};
    default: return state;
  }
}