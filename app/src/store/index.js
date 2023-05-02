import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { AuthReducer } from "./Auth/reducer";

const root = combineReducers({
  authuntication: AuthReducer,
});

export const store = legacy_createStore(root, applyMiddleware(compose(thunk)));