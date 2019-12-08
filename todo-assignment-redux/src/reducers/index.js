import { combineReducers } from "redux";
import todos from "./todos";
import authReducer from "./authReducer";
import visibilityFilter from "./visibilityFilter";

export default combineReducers({
  todos,
  visibilityFilter,
  userAuth: authReducer
});
