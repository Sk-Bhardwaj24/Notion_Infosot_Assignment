import { combineReducers } from "redux";
import { AuthReducers } from "./reducer";
export const rootReducer = combineReducers({
  isAuth: AuthReducers,
});
